import { getUserBody } from "../utils/getRandomMethods";
import { user } from "../utils/constants";

import { get, post } from "../api/apiMethods";
import { endpoint } from "../utils/endpoints";
import { Types } from "../utils/enums";
import { statusCode } from "../utils/statusCodes";

describe('Users', () => {
    test('Add new user', async () => {
        const body = await getUserBody(user.name, user.email);
        const res = await post(endpoint.add("USER"), body);
        await expect(res.status).toBe(statusCode["200"]);
        await expect(res.body.name).toEqual(user.name);
        await expect(res.body.email).toBeTruthy();
    });

    test('Get users', async () => {
        const res = await get(endpoint.getAll("USERS"))
        await expect(res.status).toBe(statusCode["200"]);
        await expect(res.body[0].id).toBeTruthy();
    });

    test('Get user', async () => {
        const body = await getUserBody(user.name, user.email);
        const newUserResult = await post(endpoint.add("USER"), body);
        const userId = newUserResult.body.id
        const res = await get(endpoint.get("USER", userId));
        await expect(res.status).toBe(statusCode["200"]);
        await expect(res.body.name).toEqual(body.name);
        await expect(res.body.email).toEqual(body.email);
    });

    test('Check type of user fields', async () => {
        const body = await getUserBody(user.name, user.email);
        const newUserResult = await post(endpoint.add("USER"), body);
        const userId = newUserResult.body.id
        const res = await get(endpoint.get("USER", userId));
        await expect(res.status).toBe(statusCode["200"]);
        await expect(typeof res.body.name).toBe(Types.STRING);
        await expect(typeof res.body.email).toBe(Types.STRING);
        await expect(typeof res.body.is_active).toBe(Types.BOOLEAN);
        await expect(typeof res.body.role_id).toBe(Types.NUMBER);
        await expect(typeof res.body.is_admin).toBe(Types.BOOLEAN);
        await expect(typeof res.body.email_notifications).toBe(Types.BOOLEAN);
        await expect(typeof res.body.mfa_required).toBe(Types.NUMBER);
        await expect(typeof res.body.role).toBe(Types.STRING);
        await expect(typeof res.body.group_ids).toBe(Types.NUMBER_ARRAY);
    });
});

