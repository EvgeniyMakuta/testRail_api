import { getUserBody, user } from "../utils/data"
import { get, post } from "../api/methods";
import { endpoint } from "../utils/endpoints";
import {statusCode} from "../utils/enums";

describe('Users', () => {
    test.skip('Add new user', async () => {
        const body = await getUserBody(user.name, user.email);
        const res = await post(endpoint.add("USER"), body);
        await expect(res.status).toBe(statusCode["200"]);
        await expect(res.body.name).toEqual(user.name);
        await expect(res.body.email).toBeTruthy();
    });

    test.skip('Get users', async () => {
        const res = await get(endpoint.getAll("USERS"))
        await expect(res.status).toBe(statusCode["200"]);
        await expect(res.body[0].id).toBeTruthy();
    });

    // TODO
    test('Get user', async () => {
        const expectedUserId: number = 10;
    });
});

