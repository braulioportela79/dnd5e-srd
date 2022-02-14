import { useEffect, useState, useRef } from 'react';
import * as C from './styles';
import { api } from '../../../helpers/dnd5eAPI';
import { TailSpin } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import { COLUMNS } from '../../../components/SpellsTableColumns';
import { GlobalFilter } from '../../../components/GlobalFilter';

export const SpellsList = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [spellsList, setSpellsList] = useState([]);

    useEffect(() => {
        const getSpellsList = async () => {
            setIsLoading(true);
            const json = await api.getSpellsList();
            setSpellsList(json.results);
            setIsLoading(false);
        };
        getSpellsList();
    }, []);

    const ref = useRef();
    const current = ref.current;

    useEffect(() => {
        const makeTableResponsive = (table) => {
            const headings = Array.from(
                table.querySelectorAll('thead > tr > th'),
            ).map(th => th.textContent);
            table.querySelectorAll('tbody > tr')
                .forEach((row) => {
                    row.querySelectorAll('td').forEach((td, index) => {
                        td.setAttribute('data-label', headings[index]);
                    });
                })
        };
        if (!current) return;
        current.querySelectorAll('table')
            .forEach(makeTableResponsive)
    }, [ref, current, spellsList])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({
        columns: COLUMNS,
        data: spellsList
    },

        useGlobalFilter,
        useSortBy
    );

    const { globalFilter } = state;

    return (
        <>

            {window.innerWidth > 745
                ?
                <C.Container>
                    {isLoading === false ? (
                        <C.Content sidebarOpen={props.sidebarOpen}>
                            <C.Header>
                                <C.Title>Spell List</C.Title>
                            </C.Header>

                            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                            <div ref={ref}>
                                <table {...getTableProps()}>
                                    <thead>
                                        {headerGroups.map(headerGroup => (
                                            <tr {...headerGroup.getFooterGroupProps()}>
                                                {
                                                    headerGroup.headers.map(column => (
                                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                                            {window.innerWidth > 890 ?
                                                                <span>
                                                                    {column.isSorted ? (column.isSortedDesc ? '▼' : '▲') : '▼ ▲'}
                                                                </span>
                                                                :
                                                                ''
                                                            }
                                                        </th>
                                                    ))
                                                }
                                            </tr>
                                        ))}
                                    </thead>
                                    <tbody {...getTableBodyProps()}>
                                        {
                                            rows.map(row => {
                                                prepareRow(row)
                                                return (
                                                    <tr {...row.getRowProps()}>
                                                        {
                                                            row.cells.map(cell => {
                                                                return <td  {...cell.getCellProps()} >
                                                                    {
                                                                        cell.column.id === 'name' ? (
                                                                            <a href={`spells/${row.original.slug}`}>
                                                                                {cell.render('Cell')}
                                                                            </a>) :
                                                                            <>
                                                                                {cell.render('Cell')}
                                                                            </>
                                                                    }
                                                                </td>
                                                            })
                                                        }
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </C.Content>
                    ) :
                        <C.Loader>
                            <TailSpin
                                type="TailSpin"
                                color="#000"
                                height={50}
                                width={50}
                                timeout={3000}
                            />
                        </C.Loader>

                    }
                </C.Container>
                :
                <C.Container>
                    <C.Content sidebarOpen={props.sidebarOpen}>
                        <C.Header>
                            <C.Title>Monsters List</C.Title>
                        </C.Header>
                        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                        <div ref={ref}>
                            <table {...getTableProps()} >
                                <thead>
                                    {headerGroups.map(headerGroup => (
                                        <tr {...headerGroup.getFooterGroupProps()}>
                                            {
                                                headerGroup.headers.map(column => (
                                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                                        {window.innerWidth > 890 ?
                                                            <span>
                                                                {column.isSorted ? (column.isSortedDesc ? '🔻' : '🔺') : '🔻🔺'}
                                                            </span>
                                                            :
                                                            ''
                                                        }
                                                    </th>
                                                ))
                                            }
                                        </tr>
                                    ))}
                                </thead>
                                <tbody {...getTableBodyProps()}>
                                    {
                                        rows.map(row => {
                                            prepareRow(row)
                                            return (
                                                <tr {...row.getRowProps()}>
                                                    {
                                                        row.cells.map(cell => {
                                                            return <td  {...cell.getCellProps()} >
                                                                {
                                                                    cell.column.id === 'name' ? (
                                                                        <a href={`monsters/${row.original.slug}`}>
                                                                            {cell.render('Cell')}
                                                                        </a>) :
                                                                        <>
                                                                            {cell.render('Cell')}
                                                                        </>
                                                                }
                                                            </td>
                                                        })
                                                    }
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </C.Content>
                </C.Container>
            }
        </>
    );
};
