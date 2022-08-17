import { post, get, put, remove } from "../api/apiMethods";
import { endpoint } from "../utils/endpoints";
import { getProjectUpdatedBody } from "../utils/getRandomMethods";
import { project } from "../utils/constants";

import { Types } from "../utils/enums";
import { statusCode } from "../utils/statusCodes";


describe('Projects', () => {
    test('Add new project', async () => {
        const res = await post(endpoint.add("PROJECT"), project);
        await expect(res.status).toBe(statusCode["200"]);
        await expect(res.body.name).toEqual(project.name);
    });

    test('Get projects', async () => {
        const res = await get(endpoint.getAll("PROJECTS"));
        await expect(res.status).toBe(statusCode["200"]);
        await expect(res.body.projects[0].id).toBeTruthy();
    });

    test('Update project', async () => {
        const projects = await get(endpoint.getAll("PROJECTS"));
        const projectId: number = projects.body.projects[0].id;
        const body = await getProjectUpdatedBody(project.name);
        const res = await put(endpoint.update("PROJECT", projectId), body)
        await expect(res.status).toBe(statusCode["200"]);
        await expect(res.body.name).toEqual(body.name);
    });

    test('Delete project', async () => {
        const projects = await get(endpoint.getAll("PROJECTS"));
        const projectId: number =  projects.body.projects[0].id;
        const res = await remove(endpoint.delete("PROJECT", projectId))
        await expect(res.status).toBe(statusCode["200"]);
    });

    test('Get project', async () => {
        const projects = await get(endpoint.getAll("PROJECTS"));
        const projectId: number =  projects.body.projects[0].id;
        const res = await get(endpoint.get("PROJECT", projectId))
        await expect(res.status).toBe(statusCode["200"]);
        await expect(typeof res.body.name).toBe(Types.STRING);
        await expect(typeof res.body.id).toBe(Types.NUMBER);
        await expect(typeof res.body.announcement).toBe(Types.STRING);
        await expect(typeof res.body.show_announcement).toBe(Types.BOOLEAN);
        await expect(typeof res.body.is_completed).toBe(Types.BOOLEAN);
        await expect(typeof res.body.completed_on).toBe(Types.NUMBER);
        await expect(typeof res.body.suite_mode).toBe(Types.NUMBER);
        await expect(typeof res.body.default_role_id).toBe(Types.NUMBER);
        await expect(typeof res.body.url).toBe(Types.STRING);
        await expect(typeof res.body.users).toBe(Types.OBJECT);
        await expect(typeof res.body.url).toBe(Types.STRING);
    });
})
