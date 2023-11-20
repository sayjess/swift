import { Link } from "react-router-dom"


export default function Header(){
    return(
        <header>
            <Link className="site-logo" to="/">#SWIFT</Link>
            <nav>
                <Link to ="/host">Host</Link>
                <Link to="/about">About</Link>
                <Link to="/cars">Cars</Link>
            </nav>
      </header>
    )
}