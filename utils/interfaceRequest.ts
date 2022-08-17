export interface UserRequest {
    name: string,
    email: string,
}

export interface ProjectRequest {
    name: string,
    announcement?: string,
    show_announcement?: boolean,
    suite_mode?: number,
}