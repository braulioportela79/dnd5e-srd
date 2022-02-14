import * as C from './styles';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import { useRef, useEffect } from 'react';

export const RaceItem = ({ data, dataSubRace, localJson }) => {

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
                    <C.Blockquote>
                        <ReactMarkdown>{localJson.quote}</ReactMarkdown>
                        <C.BlockquoteFooter>{localJson.footer}</C.BlockquoteFooter>
                    </C.Blockquote>
                    <C.ContentImage
                        src={localJson.bg}
                    >
                        <img src={localJson.image} alt={data.slug} />
                    </C.ContentImage>
                </C.ContentHeader>
                <C.PrimaryContent>
                    <C.RaceDetails>
                        {data.name}
                        <span>Race Details</span>
                    </C.RaceDetails>
                    <ReactMarkdown>{data.desc}</ReactMarkdown>
                    <ReactMarkdown>{data.asi_desc}</ReactMarkdown>
                    <ReactMarkdown>{data.age}</ReactMarkdown>
                    <ReactMarkdown>{data.alignment}</ReactMarkdown>
                    <ReactMarkdown>{data.size}</ReactMarkdown>
                    <ReactMarkdown>{data.speed_desc}</ReactMarkdown>
                    <ReactMarkdown>{data.vision}</ReactMarkdown>
                    <div ref={ref}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.traits}</ReactMarkdown>
                    </div>
                    <ReactMarkdown>{data.languages}</ReactMarkdown>
                    {dataSubRace.length !== 0 &&
                        <>
                            <h2>Subraces</h2>
                            {dataSubRace.map((item, index) => {
                                return (
                                    <div data={item} key={index}>
                                        <h3>{item.name}</h3>
                                        <ReactMarkdown>{item.desc}</ReactMarkdown>
                                        <ReactMarkdown>{item.asi_desc}</ReactMarkdown>
                                        <ReactMarkdown >{item.traits}</ReactMarkdown>
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