import { Project, User } from "./enums";

export const user = {
    name: "Evgeniy",
    email: `test@test.com`,
}

export const project = {
    name: "API Project",
}

export async function getRandomString(str: string): Promise<string> {
    const random = (Math.random() + 1).toString(36).substring(7);
    return `${random}_${str}`
}

export async function getUserBody(name: string, email: string): Promise<User> {
    const randomEmail = await getRandomString(email);
    return {
        name: name,
        email: randomEmail,
    }
}

export async function getProjectUpdatedBody(name: string): Promise<Project> {
    const randomProjectName = await getRandomString(name);
    return {
        name: randomProjectName,
    }
}

