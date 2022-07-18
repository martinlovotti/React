import './NavBar.css';
function NavBar(){
    return(
        //Fragment
        <div classNameName="NavBar">
            <h1 className='tittle'> Mundialistas</h1>
            <div className='contenedorNavbar'>
                <div className='conteinerLogo'>
                    <img className="logo" src='./assets/qatar.png'/>   
                </div>  
            </div>
            <ul className="nav nav-tabs text-center d-flex justify-content-center align-items-center">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Grupo A</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#">Grupo B</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#">Grupo C</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#">Grupo D</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#">Grupo E</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#">Grupo F</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#">Grupo G</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#">Grupo H</a>
            </li>
            </ul>    
        </div>
    )
}


export default NavBar;

