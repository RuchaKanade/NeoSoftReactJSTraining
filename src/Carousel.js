
var carousel1 = "carousel1.jpg"
var carousel2 = "carousel2.jpg"
var carousel3 = "carousel3.jpg"

 var carouselImagestyle = {
     height: "300px"
 }

function carousel(){
    return(
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={carousel1} style={carouselImagestyle} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={carousel2} style={carouselImagestyle} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={carousel3} style={carouselImagestyle} class="d-block w-100" alt="..."/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
 
    )
}

export  default carousel

//whenerver you want to bind js with html syntax is curly braces {}