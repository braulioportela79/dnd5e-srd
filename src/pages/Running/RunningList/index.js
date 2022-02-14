import { useState, useEffect } from 'react';
import { Card } from '../../../components/Card';
import * as C from './styles';
import { api } from '../../../helpers/dnd5eAPI';
import { TailSpin } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const RunningList = (props) => {

    const [isLoading, setIsLoading] = useState(false);

    const [runningList, setRunningList] = useState([]);

    useEffect(() => {
        const getRunningList = async () => {
            setIsLoading(true);
            const json = await api.getSectionsList();
            setRunningList(json.results);
            setIsLoading(false);
        };
        getRunningList();
    }, []);

    const removeSectionsList = [{ parent: 'Characters' }, { parent: 'Equipment' }, { parent: 'Legal Information' }, { parent: 'Appendix' }, { parent: 'Spellcasting' }, { parent: 'Character Advancement' }]

    const filteredSectionsList = runningList.filter(function (sectionsList_el) {
        return removeSectionsList.filter(function (removeSectionsList_el) {
            return removeSectionsList_el.parent === sectionsList_el.parent;
        }).length === 0
    });

    return (
        <C.Container>
            <C.ListingBody sidebarOpen={props.sidebarOpen}>
                {isLoading === false ? (
                    <C.CardListing>
                        {filteredSectionsList.map((item, index) => (
                            <Card
                                key={index}
                                data={item}
                                link={`/running/${item.slug}`}
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