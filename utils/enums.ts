export enum MethodAll {
    USERS,
    PROJECTS
}
export type MethodAllKey = keyof typeof MethodAll;

export enum Method {
    USER,
    PROJECT
}
export type MethodKey = keyof typeof Method;

export interface User {
    name: string,
    email: string,
}

export interface Project {
    name: string,
    announcement?: string,
    show_announcement?: boolean,
    suite_mode?: number,
}

export const statusCode = {
    200: 200
}