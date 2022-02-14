import { useEffect, useState } from 'react';
import * as C from './styles';
import { api } from '../../../helpers/dnd5eAPI';
import { TailSpin } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const MagicItemList = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [magicItemList, setMagicItemList] = useState([]);

    useEffect(() => {
        const getMagicItemList = async () => {
            setIsLoading(true);
            const json = await api.getMagicItemList();
            setMagicItemList(json.results);
            setIsLoading(false);
        };
        getMagicItemList();
    }, []);

    const grouped = magicItemList.reduce((acc, obj) => {
        const key = obj.name.charAt(0);
        acc[key] = acc[key] || [];
        acc[key].push(obj);
        return acc;

    }, {});

    return (
        <C.Container>
            <C.Title>
                Magic Item List
            </C.Title>
            {isLoading === false ? (
                <C.Content>
                    {
                        Object.values(grouped).map((item, index) => {
                            return (
                                <ul key={index}>
                                    <h3>{item[0].name[0]}</h3>
                                    {item.map((item, index) => (
                                        <li key={index} data={item}>
                                            <a
                                                href={`/magicitems/${item.slug}`}
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )
                        })
                    }
                </C.Content>
            ) :
                <div>
                    <C.Loader>
                        <TailSpin
                            type="TailSpin"
                            color="#000"
                            height={50}
                            width={50}
                            timeout={3000}
                        />
                    </C.Loader>
                </div>
            }
        </C.Container>
    );
};
