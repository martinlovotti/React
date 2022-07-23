import './NavBar.css';

function Group(props){
    return(
        <li className="nav-item danger">
            <a className="nav-link" aria-current="page" href={props.href}> Grupo {props.g} <i class="fa-solid fa-futbol"></i></a>
        </li>
    )
};

function NavBar(){
    return(
        //Fragment
        <div className="NavBar">
            <h1 className='tittle'> Mundialistas <i class="fa-solid fa-trophy"></i></h1>
            <div className='contenedorNavbar'>
                <div className='conteinerLogo'>
                    <img className="logo" src='./assets/qatar.png'/>   
                </div>  
            </div>
            <ul className="nav nav-tabs text-center d-flex justify-content-center align-items-center">
                <Group g="A"/>
                <Group g="B"/>
                <Group g="C"/>
                <Group g="D"/>
                <Group g="E"/>
                <Group g="F"/>
                <Group g="G"/>
                <Group g="H"/>
            </ul>    
        </div>
    )
}
export default NavBar;



