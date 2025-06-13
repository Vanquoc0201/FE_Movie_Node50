import { DOMAIN, GETCINEMACLUSTER, GETCINEMASYSTEM, MODULECINEMA } from "@/constant/app.constant";
import axiosClient from "./axiosClient";
export const cinemaService = {
    async getCinemaSystem(){
        try {
            const response = await axiosClient.get(`${DOMAIN}/${MODULECINEMA}/${GETCINEMASYSTEM}`)
            return response.data
        } catch (error){
            console.log(error);
        }
    },
    async getCinemaCluster(maHeThongRap : number){
        try {
            const response = await axiosClient.get(`${DOMAIN}/${MODULECINEMA}/${GETCINEMACLUSTER}`, 
                {
                    params : {maHeThongRap}
                }
            )
            return response.data
        } catch (error){
            console.log(error);
        }
    },
}