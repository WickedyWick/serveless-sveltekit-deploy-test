import type { RequestHandler } from './$types';

export const POST: RequestHandler = async () => {
    console.log("TEQUEST")
    const res = await fetch(`https://dog.ceo/api/breeds/list/all`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json;charset=utf-8',
        }
    })
    const json = await res.json()
    return new Response("SUCCESS", {
        status: res.status, 
    });
};