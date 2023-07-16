import { useContext } from "react";
import { AppContext } from "../context";

export default useAppContext = () => {
    return useContext(AppContext);
}