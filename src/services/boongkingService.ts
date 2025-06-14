import { CREATESHOWTIME, DOMAIN, GETLISTCINEMA, MODULEBOOKING } from "@/constant/app.constant"
import axiosClient from "./axiosClient"
import { TCreateShowtimes } from "@/types/booking/createbooking.type"
export const bookingService = {
    async getListCinema(){
        try {
            const response = await axiosClient.get(`${DOMAIN}/${MODULEBOOKING}/${GETLISTCINEMA}`)
            return response.data
        } catch (error){
            console.log(error);
        }
    },
    async createShowTimes(data : TCreateShowtimes){
        try {
            const response = await axiosClient.post(`${DOMAIN}/${MODULEBOOKING}/${CREATESHOWTIME}`,data)
            return response.data
        } catch (error){
            console.log(error);
        }
    }
}