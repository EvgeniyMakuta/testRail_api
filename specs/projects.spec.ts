import { post, get, put, remove } from "../api/methods";
import { endpoint } from "../utils/endpoints";
import { getProjectUpdatedBody, project } from "../utils/data";

describe('Projects', () => {
    test('Add new project', async () => {
        const res = await post(endpoint.add("PROJECT"), project);
        await expect(res.status).toBe(200);
        await expect(res.body.name).toEqual(project.name);
    });

    test('Get projects', async () => {
        const res = await get(endpoint.getAll("PROJECTS"));
        await expect(res.status).toBe(200);
        await expect(res.body.projects[0].id).toBeTruthy();
        console.log(res.body)
    });

    test('Update project', async () => {
        const projectId: number = 2;
        const body = await getProjectUpdatedBody(project.name);
        const res = await put(endpoint.update("PROJECT", projectId), body)
        await expect(res.status).toBe(200);
        await expect(res.body.name).toEqual(body.name);
    });

    test('Delete project', async () => {
        const projectId: number = 6;
        const res = await remove(endpoint.delete("PROJECT", projectId))
        await expect(res.status).toBe(200);
    });
})
