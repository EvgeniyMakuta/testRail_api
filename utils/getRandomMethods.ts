import { ProjectRequest, UserRequest } from "./interfaceRequest";

export async function getRandomString(str: string): Promise<string> {
    const random = (Math.random() + 1).toString(36).substring(7);
    return `${random}_${str}`
}

export async function getUserBody(name: string, email: string): Promise<UserRequest> {
    const randomEmail = await getRandomString(email);
    return {
        name: name,
        email: randomEmail,
    }
}

export async function getProjectUpdatedBody(name: string): Promise<ProjectRequest> {
    const randomProjectName = await getRandomString(name);
    return {
        name: randomProjectName,
    }
}

