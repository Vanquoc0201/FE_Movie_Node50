import { ADDUSER, DELETEUSER, DOMAIN, GETALLUSER, MODULEUSER, SEARCHUSER } from "@/constant/app.constant";
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
    },
    async deleteUser(taiKhoan: string) {
        try {
            const response = await axiosClient.delete(`${DOMAIN}/${MODULEUSER}/${DELETEUSER}`, {
                params: {
                    taiKhoan: taiKhoan
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    async searchUser(taiKhoan: string) {
        try {
            const response = await axiosClient.get(`${DOMAIN}/${MODULEUSER}/${SEARCHUSER}`, {
                params: {
                    taiKhoan : taiKhoan
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }



}