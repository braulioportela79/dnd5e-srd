import * as C from './styles';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import { useRef, useEffect } from 'react';

export const ClassItem = ({ data, dataClassArchetype, localJson }) => {

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
        <C.Container src={localJson.bg}>

           
                <C.ContentContainer>
                <C.ContentHeader>
                    <img src={localJson.image} alt={data.slug} />
                </C.ContentHeader>


                <C.PrimaryContent>

                    <C.RaceDetails>
                        {data.name}
                        <span>Class Details</span>
                    </C.RaceDetails>
                    <h2>Class Features</h2>
                    <p>As a {data.slug}, you gain the following features.</p>
                    <h3>Hit Points</h3>
                    <p><span>Hit Dice:</span> {data.hit_dice} per {data.slug} level</p>
                    <p><span>Hit Points at 1st Level:</span> {data.hp_at_1st_level} level</p>
                    <p><span>Hit Points at Higher Levels:</span> {data.hp_at_higher_levels}</p>
                    <h3>Proficiences</h3>
                    <p><span>Armor: </span>{data.prof_armor}</p>
                    <p><span>Weapons: </span>{data.prof_weapons}</p>
                    <p><span>Tools: </span>{data.prof_tools}</p>
                    <p><span>Saving Throws: </span>{data.prof_saving_throws}</p>
                    <p><span>Skills: </span>{data.prof_skills}</p>
                    <h3>Equipment</h3>
                    <p><ReactMarkdown>{data.equipment}</ReactMarkdown></p>
                    <h3>The {data.name}</h3>
                    <div ref={ref}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.table}</ReactMarkdown>
               
                    <h2>Class Abilities</h2>

                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.desc}</ReactMarkdown>
                    </div>
                    {dataClassArchetype.length !== 0 &&
                        <>
                            {dataClassArchetype.map((item, index) => {
                                return (
                                    <div data={item} key={index} >
                                        <h2>{data.name} {data.subtypes_name}</h2>
                                        <h3>{item.name}</h3>
                                        <div ref={ref}>
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.desc}</ReactMarkdown>
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    }
        </C.PrimaryContent>
                </C.ContentContainer>

    
        </C.Container>
    );
};