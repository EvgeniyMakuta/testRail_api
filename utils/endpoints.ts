import { MethodAllKey, MethodKey } from "./enums";

const serverAddress = "https://tstms.testrail.io/";
const path = "index.php?/api/v2";
const base = `${serverAddress}${path}`;

const contentType = "application/json";
const authToken = "YXVzbXltb2c0ODVAZ21haWwuY29tOkF1c3RyYWxpYTI0JA==";
const auth = `Basic ${authToken}`;

export const header =
    {
            "Content-Type": contentType,
            "Authorization": auth,
    }

export const endpoint = {
        getAll: (name: MethodAllKey) => `${base}/get_${name}`,
        get: (name: MethodKey, id: number) => `${base}/get_${name}/${id}`,
        add: (name: MethodKey) => `${base}/add_${name}`,
        update: (name: MethodKey, id: number) => `${base}/update_${name}/${id}`,
        delete: (name: MethodKey, id: number) => `${base}/delete_${name}/${id}`,
}
