import { useContext } from "react"
import { authContext } from "../Context/ProvideAuth";

const useAuth = () =>{
    return useContext(authContext);
}
export default useAuth;