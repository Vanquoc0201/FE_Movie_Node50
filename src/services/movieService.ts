import { ACCESS_TOKEN, DOMAIN, GETMOVIE, MODULEMOVIE } from "@/constant/app.constant";
import axios from "axios";
export const movieService = {
    async getAllMovie(){
        try {
            const response = await axios.get(`${DOMAIN}/${MODULEMOVIE}/${GETMOVIE}`, {
                headers : {
                    Authorization : `Bearer ${ACCESS_TOKEN}`
                }
            })
            return response.data
        } catch (error){
            console.log(error);
        }
    }
}