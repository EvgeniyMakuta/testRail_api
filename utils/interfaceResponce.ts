export interface UserResponse {
    name: string,
    id: number,
    email: string,
    is_active: boolean,
    role_id: number,
    is_admin: boolean,
    email_notifications: boolean,
    mfa_required: number,
    role: string,
    group_ids: object
}

export interface ProjectResponse {
    "id": number,
    "announcement": string,
    "completed_on": number,
    "default_role_id": number,
    "default_role": string,
    "is_completed": boolean,
    "name": string,
    "show_announcement": boolean,
    "suite_mode": string,
    "url": string,
    "users": object,
    "groups": object
}