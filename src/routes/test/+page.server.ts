import type { PageServerLoad } from './$types';


export const load = (async () => {
    const res = await fetch(`https://dog.ceo/api/breeds/list/all`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json;charset=utf-8',
        }
    })
    const json = await res.json();
    return {
        json
    };
}) satisfies PageServerLoad;