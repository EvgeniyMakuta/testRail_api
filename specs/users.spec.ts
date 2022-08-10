import { getUserBody, user } from "../utils/data"
import { get, post } from "../api/methods";
import { endpoint } from "../utils/endpoints";

describe('Users', () => {
    test.skip('Add new user', async () => {
        const body = await getUserBody(user.name, user.email);
        const res = await post(endpoint.add("USER"), body);
        await expect(res.status).toBe(200);
        await expect(res.body.name).toEqual(user.name);
        await expect(res.body.email).toBeTruthy();
    });

    test.skip('Get users', async () => {
        const res = await get(endpoint.getAll("USERS"))
        await expect(res.status).toBe(200);
        await expect(res.body[0].id).toBeTruthy();
    });

    // // TODO
    // test('Get user', async () => {
    //     const expectedUserId: number = 10;
    //     const users = await getUsers();
    //     const { name: expectedName, id: expectedId, email: expectedEmail } = users.body[expectedUserId];
    //     const res = await getUser(expectedUserId);
    //     await expect(res.status).toBe(200);
    //     await expect(res.body.name).toEqual(user.name());
    //     await expect(res.body.id).toEqual(expectedUserId);
    //     console.log("expectedId - ", expectedId);
    //     console.log("expectedEmail - ", expectedEmail)
    //     console.log("res.body.id - ", res.body.id)
    //     console.log("body", res.body)
    // });
});

