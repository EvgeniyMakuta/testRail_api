import superagent from "superagent";
import { header } from "../utils/endpointsData";

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
    } catch (err: any) {
        console.log(err.message);
    }
    return res;
}