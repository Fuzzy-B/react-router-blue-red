import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <> 
        <div id="navbar">
            <Link className="link"  to='/'>Home</Link>
            <Link  className="link" to='/blue'>blue</Link>
            <Link className="link" to='/red'>red</Link>
            <Link className="link" to='/random'>random number!</Link>
        </div>

        <div id="footer">
            <Link className="link"  to='/'>Home</Link>
            <Link  className="link" to='/blue'>blue</Link>
            <Link className="link" to='/red'>red</Link>
            <Link className="link" to='/random'>random number!</Link>
        </div>

        </>
        
    )
}