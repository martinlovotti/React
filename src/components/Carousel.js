import './Carousel.css';

function CarouselImg(props){
  return(
    <div className="carousel-item">
      <img src={props.src} className="d-block w-100" alt="..."/>
  </div>
  )
};

function Carousel(){
        return(
        //fragment
 <div classNameName="Section">
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src='https://img.planetafobal.com/2022/05/uruguay-puma-2022-camiseta-mundial-qatar-local-za.jpg' className="d-block w-100" alt="..."/>
    </div>
    <CarouselImg src='https://www.ellitoral.com/images/2022/07/04/iE9AweJ8Z_1300x655__1.jpg'/>
    <CarouselImg src='https://todosobrecamisetas.com/wp-content/uploads/ghana-2022-puma-home-kit-h.jpg'/>
  </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
    </button>
    </div>                           
  </div>
)}
export default Carousel;