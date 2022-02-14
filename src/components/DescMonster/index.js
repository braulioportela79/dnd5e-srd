import React from 'react';
import * as C from './styles';

export const DescMonster = ({ data }) => {

    const speed = data.speed
    const skills = data.skills

    function GetPropertyValue(obj1, dataToRetrieve) {
        return dataToRetrieve
            .split('.')
            .reduce(function (o, k) {
                return o && o[k];
            }, obj1)
    };

    const walk = GetPropertyValue(speed, "walk");
    const swim = GetPropertyValue(speed, "swim");
    const fly = GetPropertyValue(speed, "fly");
    const climb = GetPropertyValue(speed, "climb");
    const burrow = GetPropertyValue(speed, "burrow");

    const acrobatics = GetPropertyValue(skills, "acrobatics");
    const arcana = GetPropertyValue(skills, "arcana");
    const athletics = GetPropertyValue(skills, "athletics");
    const deception = GetPropertyValue(skills, "deception");
    const history = GetPropertyValue(skills, "history");
    const insight = GetPropertyValue(skills, "insight");
    const intimidation = GetPropertyValue(skills, "intimidation");
    const investigation = GetPropertyValue(skills, "investigation");
    const medicine = GetPropertyValue(skills, "medicine");
    const nature = GetPropertyValue(skills, "nature");
    const perception = GetPropertyValue(skills, "perception");
    const performance = GetPropertyValue(skills, "performance");
    const persuasion = GetPropertyValue(skills, "persuasion");
    const religion = GetPropertyValue(skills, "religion");
    const stealth = GetPropertyValue(skills, "stealth");
    const survival = GetPropertyValue(skills, "survival");

    return (
        <C.Container>
            <C.ContentContainer>
                <C.ContentHeader>
                    <img src='/assets/monsters/monsters-avatar.png' alt={data.slug} />
                </C.ContentHeader>
                <C.PrimaryContent>
                    <C.RaceDetails>
                        {data.name}
                    </C.RaceDetails>
                    {data.size} {data.type}, {data.alignment}
                    <hr />
                    <p><span>Armor Class</span> {data.armor_class}</p>
                    <p><span>Hit Points </span> {data.hit_points} ({data.hit_dice})</p>
                    <p><span>Speed </span> {walk ? `Walk ${walk}ft.` : ''} {swim ? `Swim ${swim}ft.` : ''} {climb ? `Climb ${climb}ft.` : ''} {fly ? `Fly ${fly}ft.` : ''} {burrow ? `Burrow ${burrow}ft.` : ''}</p>
                    <hr />
                    <C.AbilitiesContainer>
                        <C.Ability>
                            <C.AbilityName>STR</C.AbilityName>
                            <C.AbilityScore>{data.strength} ({data.strength_save === null ? `+0` : data.strength >= 10 ? `+${data.strength_save}` : `-${data.strength_save}`})</C.AbilityScore>
                        </C.Ability>
                        <C.Ability>
                            <C.AbilityName>DEX</C.AbilityName>
                            <C.AbilityScore>{data.dexterity} ({data.dexterity_save === null ? `+0` : data.dexterity >= 10 ? `+${data.dexterity_save}` : `-${data.dexterity_save}`})</C.AbilityScore>
                        </C.Ability>
                        <C.Ability>
                            <C.AbilityName>CON</C.AbilityName>
                            <C.AbilityScore>{data.constitution} ({data.constitution_save === null ? `+0` : data.constitution >= 10 ? `+${data.constitution_save}` : `-${data.constitution_save}`})</C.AbilityScore>
                        </C.Ability>
                        <C.Ability>
                            <C.AbilityName>INT</C.AbilityName>
                            <C.AbilityScore>{data.intelligence} ({data.intelligence_save === null ? `+0` : data.intelligence >= 10 ? `+${data.intelligence_save}` : `-${data.intelligence_save}`})</C.AbilityScore>
                        </C.Ability>
                        <C.Ability>
                            <C.AbilityName>WIS</C.AbilityName>
                            <C.AbilityScore>{data.wisdom} ({data.wisdom_save === null ? `+0` : data.wisdom >= 10 ? `+${data.wisdom_save}` : `-${data.wisdom_save}`})</C.AbilityScore>
                        </C.Ability>
                        <C.Ability>
                            <C.AbilityName>CHA</C.AbilityName>
                            <C.AbilityScore>{data.charisma} ({data.charisma_save === null ? `+0` : data.charisma >= 10 ? `+${data.charisma_save}` : `-${data.charisma_save}`})</C.AbilityScore>
                        </C.Ability>
                    </C.AbilitiesContainer>
                    <hr />
                    {/* <p><span>Saving Throws</span></p> */}
                    {Object.keys(skills).length !== 0 ?
                        <p><span>Skills </span>
                            {acrobatics ? `Acrobatics +${acrobatics} ` : ''}
                            {arcana ? `Arcana +${arcana} ` : ''}
                            {athletics ? `Athletics +${athletics} ` : ''}
                            {deception ? `Deception +${deception} ` : ''}
                            {history ? `History +${history} ` : ''}
                            {insight ? `Insight +${insight} ` : ''}
                            {intimidation ? `Intimidation +${intimidation} ` : ''}
                            {investigation ? `Investigation +${investigation} ` : ''}
                            {medicine ? `Medicine +${medicine} ` : ''}
                            {nature ? `Nature +${nature} ` : ''}
                            {perception ? `Perception +${perception} ` : ''}
                            {performance ? `Performance +${performance} ` : ''}
                            {persuasion ? `Persuasion +${persuasion} ` : ''}
                            {religion ? `Religion +${religion} ` : ''}
                            {stealth ? `Stealth +${stealth} ` : ''}
                            {survival ? `Survival +${survival} ` : ''}
                        </p>
                        : <p><span>Skills </span> none </p>
                    }
                    <p><span>Senses</span> {data.senses}</p>
                    <p><span>Languages</span> {data.languages}</p>
                    <p><span>Challenge</span> {data.challenge_rating}</p>
                    <hr />
                    {data.special_abilities.length !== 0 &&
                        <div>
                            {data.special_abilities.map((item, index) => {
                                return (
                                    <div data={item} key={index}>
                                        <p><span>{item.name}.</span> {item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    }
                    {data.actions.length !== 0 &&
                        <div>
                            <h2>Actions</h2>
                            {data.actions.map((item, index) => {
                                return (
                                    <div data={item} key={index}>
                                        <p><span>{item.name}.</span> {item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    }
                    {data.legendary_actions.length !== 0 &&
                        <div>
                            <h2>Legendary Actions</h2>
                            {data.legendary_actions.map((item, index) => {
                                return (
                                    <div data={item} key={index}>
                                        <p><span>{item.name}.</span> {item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </C.PrimaryContent>
            </C.ContentContainer>
        </C.Container>
    );
};