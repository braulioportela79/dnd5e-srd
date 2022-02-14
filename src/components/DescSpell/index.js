import React from 'react';
import * as C from './styles';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';

export const DescSpell = ({ data }) => {

    return (
        <C.Container>
        <C.ContentContainer>
            <C.ContentHeader>
                <img src='/assets/spells/spells-avatar.png' alt={data.slug} />
            </C.ContentHeader>
            <C.PrimaryContent>
                <C.RaceDetails>
                    {data.name}

                </C.RaceDetails>

                {data.level} {data.school} | {data.dnd_class}
                <p><span>Range: </span> {data.range}</p>
                <p><span>Casting Time: </span> {data.casting_time}</p>
                <p><span>Duration: </span> {data.duration}</p>
                {
                    data.material === '' ? <p><span>Components:</span> {data.components}</p> :
                        <p><span>Components: </span> {data.components} - {data.material}</p>
                }
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.desc}</ReactMarkdown>
                {
                    data.higher_level === '' ? '' :
                        <p><span>At higher levels:</span> {data.higher_level}</p>
                }
            </C.PrimaryContent>
        </C.ContentContainer>
        </C.Container>
    );
};