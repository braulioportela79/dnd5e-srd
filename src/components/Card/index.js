import * as C from './styles';
import images from '../../helpers/cardimages.json';
import desc from '../../helpers/carddesc.json';
import ReactMarkdown from 'react-markdown'

export const Card = ({ data, link }) => {

    return (
        <C.ListingCard>
            <C.ListingCardContent>
                <C.ListingCardLink href={link} >
                {images.images.map((item, index) => (
                                    <C.ListingCardBg
                                        key={index}
                                        src={item[data.slug]}
                                    >
                                    </C.ListingCardBg>
                                ))}
                    <C.ListingCardBody>
                    {images.images.map((item, index) => (
                                    <C.ListingCardIcon
                                        key={index}
                                        src={item[`${data.slug}-icon`]}
                                    >
                                    </C.ListingCardIcon>
                                ))}
                        <C.ListingCardHeader>
                            <C.ListingCardHeaderPrimary>
                                <C.ListingCardTitle>{data.name}</C.ListingCardTitle>
                                <C.ListingCardSource></C.ListingCardSource>
                            </C.ListingCardHeaderPrimary>
                        </C.ListingCardHeader>
                        <C.ListingCardDescription>
                        {desc.desc.map((item, index) => (
                                        <p
                                            key={index}
                                        >
                                            {item[data.slug]}
                                        </p>
                                    ))}
                            <C.CharactersStatBlock>
                                {desc.desc.map((item, index) => (
                                        <span
                                            key={index}
                                        ><ReactMarkdown>
                                            {item[`${data.slug}-traits`]}
                                        </ReactMarkdown></span>
                                    ))}
                            </C.CharactersStatBlock>
                        </C.ListingCardDescription>
                    </C.ListingCardBody>
                    <C.ListingCardCallout>
                        <C.ListingCardCalloutButton>
                            <span>
                                View {data.name} Details
                            </span>
                        </C.ListingCardCalloutButton>
                    </C.ListingCardCallout>
                </C.ListingCardLink>
            </C.ListingCardContent>
        </C.ListingCard>
    );
};