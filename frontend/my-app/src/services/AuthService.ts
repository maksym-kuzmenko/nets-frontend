import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import { RoleResponse } from "../models/response/RoleResponse";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        const data = await $api.post<AuthResponse>('/auth/login', {email, password})

        // localStorage.setItem('token', data.data)
        
        return data
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/registration', {email, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }


    static async addRole(value:string, description:string):Promise<AxiosResponse<RoleResponse>>{
        return $api.post('/roles', {value, description})
    }


    static async addRoleToUser(value:string, userId:number):Promise<AxiosResponse<RoleResponse>>{
        return $api.post('/users/role', {value, userId})
    }
    
    static async resertPassword(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/users/resert', {email, password})
    }


}
