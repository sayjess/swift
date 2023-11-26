import { Link, NavLink } from "react-router-dom"
import imgUrl from "../assets/images/avatar-icon.png"

export default function Header(){
    return(
        <header>
            <Link className="site-logo" to=".">#SWIFT</Link>
            <nav>
                <NavLink 
                className = {({isActive}) => isActive ? "active-link" : null}
                to="host">Host</NavLink>
                <NavLink 
                className = {({isActive}) => isActive ? "active-link" : null}
                to="about">About</NavLink>
                <NavLink 
                className = {({isActive}) => isActive ? "active-link" : null}
                to="cars">Cars</NavLink>
                <Link to="login" className="login-link">
                    <img 
                        src={imgUrl}
                        className="login-icon"
                    />
                </Link>
            </nav>
      </header>
    )
}