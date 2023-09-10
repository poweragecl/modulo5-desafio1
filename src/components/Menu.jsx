import { Link } from "react-router-dom"

const Menu = () => {
    return(

        <header className="main-header">
            <div className="wrapper">
                <nav className="main-menu">
                    <Link to="/" className="menu-item"><img src="src/assets/house.png"/>Home</Link>
                    <Link to="/servicios" className="menu-item"><img src="src/assets/menu.png"/>Servicios</Link>
                    <Link to="/contacto" className="menu-item"><img src="src/assets/contact.png"/>Contacto</Link>
                    <Link to="/" className="brand-link menu-item">HappyCake<img src="src/assets/strawberry-cake.png"/></Link>
                </nav>
            </div>
        </header>

    )
}

export default Menu