import api from "../../api";
import { IRegister, IAuthenticate, IUser } from "../../../interfaces/User.interface"

class UserData {
    register(data: IRegister) {
        return api.post<IUser>('/register', data);
    }
    login(data: IAuthenticate) {
        return api.post<IUser>('/login', data);
    }
    logout() {
        return api.get('/logout')
    }
}

export default new UserData();