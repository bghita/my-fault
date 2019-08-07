import axios from "axios"

export default {
    signup:function (Data){
        return axios.post("/api/auth/signup",Data);
    },
    signin:function(Data){
        return axios.post("/api/auth/signin",Data)
    },
};