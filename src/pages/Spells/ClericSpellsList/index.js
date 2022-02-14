import { useEffect, useState } from 'react';
import * as C from './styles';
import { api } from '../../../helpers/dnd5eAPI';
import { TailSpin } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const ClericSpellsList = (props) => {

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

    const removeSpellsList = [
        { dnd_class: 'Bard' },
        // { dnd_class: 'Bard, Cleric' },
        // { dnd_class: 'Bard, Cleric, Druid' },
        // { dnd_class: 'Bard, Cleric, Druid, Paladin, Ranger' },
        // { dnd_class: 'Bard, Cleric, Druid, Paladin, Ranger, Ritual Caster' },
        // { dnd_class: 'Bard, Cleric, Druid, Paladin, Ranger, Ritual Caster, Sorcerer, Wizard' },
        // { dnd_class: 'Bard, Cleric, Druid, Paladin, Ranger, Warlock' },
        // { dnd_class: 'Bard, Cleric, Druid, Paladin, Ranger, Wizard' },
        // { dnd_class: 'Bard, Cleric, Druid, Paladin, Sorcerer, Warlock, Wizard' },
        // { dnd_class: 'Bard, Cleric, Druid, Paladin, Warlock, Wizard' },
        // { dnd_class: 'Bard, Cleric, Druid, Paladin, Wizard' },
        // { dnd_class: 'Bard, Cleric, Druid, Ranger, Ritual Caster' },
        // { dnd_class: 'Bard, Cleric, Druid, Sorcerer' },
        // { dnd_class: 'Bard, Cleric, Druid, Sorcerer, Warlock, Wizard' },
        // { dnd_class: 'Bard, Cleric, Druid, Sorcerer, Wizard' },
        // { dnd_class: 'Bard, Cleric, Druid, Warlock' },
        // { dnd_class: 'Bard, Cleric, Druid, Wizard' },
        // { dnd_class: 'Bard, Cleric, Paladin' },
        // { dnd_class: 'Bard, Cleric, Paladin, Sorcerer, Warlock, Wizard' },
        // { dnd_class: 'Bard, Cleric, Ranger, Wizard' },
        // { dnd_class: 'Bard, Cleric, Ritual Caster, Wizard' },
        // { dnd_class: 'Bard, Cleric, Sorcerer, Warlock, Wizard' },
        // { dnd_class: 'Bard, Cleric, Sorcerer, Wizard' },
        // { dnd_class: 'Bard, Cleric, Warlock' },
        // { dnd_class: 'Bard, Cleric, Warlock, Wizard' },
        // { dnd_class: 'Bard, Cleric, Wizard' },
        { dnd_class: 'Bard, Druid' },
        { dnd_class: 'Bard, Druid, Ranger' },
        { dnd_class: 'Bard, Druid, Ranger, Ritual Caster' },
        { dnd_class: 'Bard, Druid, Ranger, Wizard' },
        { dnd_class: 'Bard, Druid, Sorcerer, Warlock, Wizard' },
        { dnd_class: 'Bard, Druid, Warlock, Wizard' },
        { dnd_class: 'Bard, Druid, Wizard' },
        { dnd_class: 'Bard, Paladin' },
        { dnd_class: 'Bard, Ritual Caster, Sorcerer, Warlock, Wizard' },
        { dnd_class: 'Bard, Ritual Caster, Warlock, Wizard' },
        { dnd_class: 'Bard, Ritual Caster, Wizard' },
        { dnd_class: 'Bard, Sorcerer, Warlock, Wizard' },
        { dnd_class: 'Bard, Sorcerer, Wizard' },
        { dnd_class: 'Bard, Warlock' },
        { dnd_class: 'Bard, Warlock, Wizard' },
        { dnd_class: 'Bard, Wizard' },
        // { dnd_class: 'Cleric, Bard, Druid, Sorcerer, Wizard' },
        // { dnd_class: 'Cleric' },
        // { dnd_class: 'Cleric, Druid' },
        // { dnd_class: 'Cleric, Druid, Paladin' },
        // { dnd_class: 'Cleric, Druid, Paladin, Ranger' },
        // { dnd_class: 'Cleric, Druid, Paladin, Ranger, Ritual Caster' },
        // { dnd_class: 'Cleric, Druid, Paladin, Ranger, Sorcerer' },
        // { dnd_class: 'Cleric, Druid, Paladin, Ranger, Sorcerer, Wizard' },
        // { dnd_class: 'Cleric, Druid, Paladin, Ritual Caster' },
        // { dnd_class: 'Cleric, Druid, Paladin, Sorcerer, Wizard' },
        // { dnd_class: 'Cleric, Druid, Ranger' },
        // { dnd_class: 'Cleric, Druid, Ranger, Ritual Caster, Sorcerer' },
        // { dnd_class: 'Cleric, Druid, Ranger, Sorcerer, Wizard' },
        // { dnd_class: 'Cleric, Druid, Ritual Caster' },
        // { dnd_class: 'Cleric, Druid, Sorcerer' },
        // { dnd_class: 'Cleric, Druid, Sorcerer, Warlock' },
        // { dnd_class: 'Cleric, Druid, Sorcerer, Warlock, Wizard' },
        // { dnd_class: 'Cleric, Druid, Sorcerer, Wizard' },
        // { dnd_class: 'Cleric, Druid, Wizard' },
        // { dnd_class: 'Cleric, Paladin' },
        // { dnd_class: 'Cleric, Paladin, Ritual Caster' },
        // { dnd_class: 'Cleric, Paladin, Sorcerer, Warlock, Wizard' },
        // { dnd_class: 'Cleric, Paladin, Warlock' },
        // { dnd_class: 'Cleric, Paladin, Warlock, Wizard' },
        // { dnd_class: 'Cleric, Paladin, Wizard' },
        // { dnd_class: 'Cleric, Ritual Caster' },
        // { dnd_class: 'Cleric, Ritual Caster, Wizard' },
        // { dnd_class: 'Cleric, Sorcerer, Warlock, Wizard' },
        // { dnd_class: 'Cleric, Sorcerer, Wizard' },
        // { dnd_class: 'Cleric, Warlock' },
        // { dnd_class: 'Cleric, Warlock, Wizard' },
        // { dnd_class: 'Cleric, Wizard' },
        { dnd_class: 'Druid' },
        { dnd_class: 'Druid, Paladin' },
        { dnd_class: 'Druid, Paladin, Ranger, Ritual Caster' },
        { dnd_class: 'Druid, Paladin, Sorcerer, Warlock, Wizard' },
        { dnd_class: 'Druid, Paladin, Sorcerer, Wizard' },
        { dnd_class: 'Druid, Ranger' },
        { dnd_class: 'Druid, Ranger, Ritual Caster, Sorcerer, Wizard' },
        { dnd_class: 'Druid, Ranger, Sorcerer, Wizard' },
        { dnd_class: 'Druid, Sorcerer, Warlock, Wizard' },
        { dnd_class: 'Druid, Sorcerer, Wizard' },
        { dnd_class: 'Druid, Warlock' },
        { dnd_class: 'Druid, Wizard' },
        { dnd_class: 'Paladin' },
        { dnd_class: 'Paladin, Ranger' },
        { dnd_class: 'Paladin, Sorcerer, Warlock, Wizard' },
        { dnd_class: 'Paladin, Warlock' },
        { dnd_class: 'Ranger, Ritual Caster, Wizard' },
        { dnd_class: 'Ritual Caster, Warlock, Wizard' },
        { dnd_class: 'Ritual Caster, Wizard' },
        { dnd_class: 'Sorcerer, Warlock, Wizard' },
        { dnd_class: 'Sorcerer, Wizard' },
        { dnd_class: 'Warlock' },
        { dnd_class: 'Warlock, Wizard' },
        { dnd_class: 'Wizard' },
    ]

    const filteredSpellsList = spellsList.filter(function (spellsList_el) {
        return removeSpellsList.filter(function (removeSpellsList_el) {
            return removeSpellsList_el.dnd_class === spellsList_el.dnd_class;
        }).length === 0
    });

    const grouped = filteredSpellsList.reduce((acc, obj) => {
        const key = obj.level_int;
        acc[key] = acc[key] || [];
        acc[key].push(obj);
        console.log(obj)
        return acc;

    }, {});

    return (
        <C.Container>
            <C.Title>Cleric Spells List</C.Title>
            {isLoading === false ? (
                <C.Content menuOpen={props.menuOpen}>
                    {
                        Object.values(grouped).map((item, index) => {
                            return (
                                <ul key={index}>
                                    <h3>{item[0].level}</h3>
                                    {item.map((item, index) => (
                                        <li key={index} data={item}>
                                            <a
                                                href={`/spells/${item.slug}`}
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
