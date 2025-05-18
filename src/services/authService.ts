import { DOMAIN, LOGIN, MODULEAUTH, REGISTER } from '@/constant/app.constant';
import axios from 'axios';

export const authService = {
  register: (data: {
    taiKhoan: string;
    matKhau: string;
    hoTen: string;
    email: string;
    soDt: string;
  }) => {
    return axios.post(`${DOMAIN}/${MODULEAUTH}/${REGISTER}`, data); 
  },
  login : (data : {
    taiKhoan: string;
    matKhau: string;
  }) => {
    return axios.post(`${DOMAIN}/${MODULEAUTH}/${LOGIN}`, data)
  }
};
