import { ADDUSER, DOMAIN, GETALLUSER, MODULEUSER } from "@/constant/app.constant";
import axiosClient from "./axiosClient"
import { TAddUser } from "@/types/user/addUser.type";
export const userService = {
    async getAllUser(){
        try {
            const response = await axiosClient.get(`${DOMAIN}/${MODULEUSER}/${GETALLUSER}`)
            return response.data
        } catch (error){
            console.log(error);
        }
    },
    async addUser(data : TAddUser){
        try {
            const response = await axiosClient.post(`${DOMAIN}/${MODULEUSER}/${ADDUSER}`,data)
            return response.data
        } catch (error){
            console.log(error);
        }
    }
}