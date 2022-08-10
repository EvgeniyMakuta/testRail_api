import superagent from "superagent";
import { header } from "../utils/endpoints";

export async function get(endpoint: string): Promise<any> {
    let res: any;
    try {
        res = await superagent
            .get(endpoint)
            .set(header);
    } catch (err: any) {
        console.log(err.message)
    }
    return res;
}

export async function post(endpoint: string, body: object): Promise<any> {
    let res: any;
    try {
        res = await superagent
            .post(endpoint)
            .set(header)
            .send(body);
        console.log(`${endpoint.split("_").splice(1, 1)} was created with name '${res.body.name}'`)
    } catch (err: any) {
        console.log(err.message);
    }
    return res;
}

export async function put(endpoint: string, body: object): Promise<any> {
    let res: any;
    try {
        res = await superagent
            .post(endpoint)
            .set(header)
            .send(body);
        console.log(`${endpoint.split("_").splice(1, 1)} was changed with name '${res.body.name}'`)
    } catch (err: any) {
        console.log(err.message);
    }
    return res;
}

export async function remove(endpoint: string): Promise<any> {
    let res: any;
    try {
        res = await superagent
            .post(endpoint)
            .set(header);
        console.log(`${endpoint.split("_").splice(1, 1)} was deleted with name '${res.body.name}'`)
    } catch (err: any) {
        console.log(err.message);
    }
    return res;
}