import axios from "axios";

const instance = axios.create({
    baseURL: `https://neko-cafe-back.herokuapp.com/`
});

//api
export const RequestApi = {
    postRequest() {
        return instance.post<{ success: boolean }, any>("auth/test",{success: true})
    }
}

