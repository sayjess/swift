import HostCarDetail from "../pages/Host/HostCarDetail"
import { NavLink, Outlet, useParams } from "react-router-dom"


export default function ListedCarLayout() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    const params = useParams()
    console.log(params)
    return (
        <>
            <HostCarDetail />
            <nav className="listed-nav">
                <NavLink 
                end
                style={({isActive}) => isActive ? activeStyle : null}
                to="/host/cars/:id/">Details</NavLink>
                <NavLink 
                style={({isActive}) => isActive ? activeStyle : null}
                to="/host/cars/:id/pricing">Pricing</NavLink>
                <NavLink 
                style={({isActive}) => isActive ? activeStyle : null}
                to="/host/cars/:id/photos">Photos</NavLink>
                
            </nav>
            <Outlet />
        </>
    )
}