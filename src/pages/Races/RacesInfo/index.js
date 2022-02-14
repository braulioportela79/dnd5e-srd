import * as C from './styles';
import { useEffect, useState } from 'react';
import { api } from '../../../helpers/dnd5eAPI';
import { RaceItem } from '../../../components/RaceItem';
import { TailSpin } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useParams } from 'react-router';

export const RacesInfo = (props) => {

    const { slug } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [raceInfo, setRaceInfo] = useState([]);
    const [subRaceInfo, setSubRaceInfo] = useState([]);
    const [localJson, setLocalJson] = useState([]);

    useEffect(() => {
        const getRaceInfo = async (slug) => {
            setIsLoading(true);
            const json = await api.getRaceInfo(slug);
            setRaceInfo(json);
            setIsLoading(false);
        };
        getRaceInfo(slug);
    }, [slug]);

    useEffect(() => {
        const getSubRaceInfo = async (slug) => {
            setIsLoading(true);
            const json = await api.getSubRaceInfo(slug);
            setSubRaceInfo(json.subraces);
            setIsLoading(false);
        };
        getSubRaceInfo(slug);
    }, [slug]);

    useEffect(() => {
        const getLocalJson = async (slug) => {
            setIsLoading(true);
            const json = await api.getLocalJson(slug);
            setLocalJson(json);
            setIsLoading(false);
        };
        getLocalJson(slug);
    }, [slug]);

    useEffect(() => {
        if (window.innerWidth < 745) props.setSidebarOpen(false);
    }, [props]);

    return (
        <C.Container>
            {isLoading === false ? (
                <C.Content sidebarOpen={props.sidebarOpen}>
                    <RaceItem data={raceInfo} dataSubRace={subRaceInfo} localJson={localJson} />
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
