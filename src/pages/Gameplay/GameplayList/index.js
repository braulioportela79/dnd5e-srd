import { useState, useEffect } from 'react';
import { Card } from '../../../components/Card';
import * as C from './styles';
import { api } from '../../../helpers/dnd5eAPI';
import { TailSpin } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const GameplayList = (props) => {

    const [isLoading, setIsLoading] = useState(false);

    const [gameplayList, setGameplayList] = useState([]);

    useEffect(() => {
        const getGameplayList = async () => {
            setIsLoading(true);
            const json = await api.getGameplayList();
            setGameplayList(json.results);
            setIsLoading(false);
        };
        getGameplayList();
    }, []);

    return (
        <C.Container>
            <C.ListingBody sidebarOpen={props.sidebarOpen}>
                {isLoading === false ? (
                    <C.CardListing>
                        {gameplayList.map((item, index) => (
                            <Card
                                key={index}
                                data={item}
                                link={`/gameplay-mechanics/${item.slug}`}
                            />
                        ))}
                    </C.CardListing>
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
            </C.ListingBody>

        </C.Container>
    );
};