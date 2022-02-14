import { useRef, useEffect } from 'react';
import * as C from './styles';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';


export const MagicItem = ({ data, localJson }) => {

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
    }, [ref, current])

    return (
        <C.Container>
            <C.ContentContainer>
            <C.ContentHeader>
                    <img src='/assets/magicitems/magicitems.png' alt={data.slug} />
                </C.ContentHeader>
                <C.PrimaryContent>
                    <C.RaceDetails>
                        {data.name}
                        <span>Details</span>
                    </C.RaceDetails>
                    <div ref={ref}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.desc}</ReactMarkdown>
                    </div>
                </C.PrimaryContent>
            </C.ContentContainer>
        </C.Container>
    );
};