import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
const HomeLayout = () => {
    return ( 
        <div className="layout">
            <Navbar/>
            <Outlet/>
        </div>
     );
}
 
export default HomeLayout;