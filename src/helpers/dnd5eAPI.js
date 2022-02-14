let BASE = 'https://api.open5e.com';

const apiFetchGet = async (endpoint) => {
    const res = await fetch(`${BASE + endpoint}`);
    const json = await res.json();
    return json;
}

const apiFetchGetLocal = async (endpoint) => {
    const res = await fetch(endpoint, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    const json = await res.json();
    return json;
}

export const  api = {
    getSectionsList: async () => {
        const json = await apiFetchGet(
            `/sections/`
        );
        return json;
    },
    getSectionInfo: async (slug) => {
        const json = await apiFetchGet(
            `/sections/${slug}`,
            { slug }
        );
        return json;
    },
    getRacesList: async () => {
        const json = await apiFetchGet(
            '/races'
        );
        return json;
    },
    getRaceInfo: async (slug) => {
        const json = await apiFetchGet(
            `/races/${slug}/`,
            { slug }
        );
        return json;
    },
    getSubRaceInfo: async (slug) => {
        const json = await apiFetchGet(
            `/races/${slug}`,
            { slug }
        );
        return json;
    },
    getClassesList: async () => {
        const json = await apiFetchGet(
            '/classes'
        );
        return json;
    },
    getClassInfo: async (slug) => {
        const json = await apiFetchGet(
            `/classes/${slug}/`,
            { slug }
        );
        return json;
    },
    getClassArchetypeInfo: async (slug) => {
        const json = await apiFetchGet(
            `/classes/${slug}/`,
            { slug }
        );
        return json;
    },
    getLocalJson: async (slug) => {
        const json = await apiFetchGetLocal(
            `desc/${slug}.json`,
            { slug }
        );
        return json;
    },
    getCombatList: async () => {
        const json = await apiFetchGetLocal(
            `combat.json`
        );
        return json;
    },
    getGameplayList: async () => {
        const json = await apiFetchGetLocal(
            `gameplay-mechanics.json`
        );
        return json;
    },
    getMagicItemList: async () => {
        const json = await apiFetchGet(
            `/magicitems/?fields=slug,name,desc,type,rarity&limit=1000`
        );
        return json;
    },
    getMagicItemInfo: async (slug) => {
        const json = await apiFetchGet(
            `/magicitems/${slug}`,
            { slug }
        );
        return json;
    },
    getSpellsList: async () => {
        const json = await apiFetchGet(
            `/spells/?fields=slug,name,school,dnd_class,level,components,level_int,%20document__slug,%20document__title&limit=1000`
        );
        return json;
    },
    getSpellItemInfo: async (slug) => {
        const json = await apiFetchGet(
            `/spells/${slug}`,
            { slug }
        );
        return json;
    },
    getMonstersList: async () => {
        const json = await apiFetchGet(
            `/monsters/?fields=slug,name,challenge_rating,type,size,hit_points,document__slug,%20document__title&limit=2000&ordering=slug`
        );
        return json;
    },
    getMonsterItemInfo: async (slug) => {
        const json = await apiFetchGet(
            `/monsters/${slug}`,
            { slug }
        );
        return json;
    },
};

