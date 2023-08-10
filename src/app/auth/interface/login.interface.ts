
export interface LoginResponse {
    token: string;
}

export interface LoginRequest {
    user: string;
    password: string;
}