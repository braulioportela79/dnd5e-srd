import * as C from './styles';
import { useEffect, useState } from 'react';
import { Card } from '../../../components/Card';
import { api } from '../../../helpers/dnd5eAPI';
import { TailSpin } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const RacesList = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [racesList, setRacesList] = useState([]);

    useEffect(() => {
        const getRacesList = async () => {
            setIsLoading(true);
            const json = await api.getRacesList();
            setRacesList(json.results);
            setIsLoading(false);
        };
        getRacesList();
    }, []);

    return (
        <C.Container>
            <C.ListingBody sidebarOpen={props.sidebarOpen}>
                {isLoading === false ? (
                    <C.CardListing>
                        {racesList.map((item, index) => (
                            <Card
                                key={index}
                                data={item}
                                link={`/races/${item.slug}`}
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