import { MethodAllKey, MethodKey } from "./types";
import { base } from "./endpointsData";

export const endpoint = {
        getAll: (name: MethodAllKey) => `${base}/get_${name}`,
        get: (name: MethodKey, id: number) => `${base}/get_${name}/${id}`,
        add: (name: MethodKey) => `${base}/add_${name}`,
        update: (name: MethodKey, id: number) => `${base}/update_${name}/${id}`,
        delete: (name: MethodKey, id: number) => `${base}/delete_${name}/${id}`,
}
