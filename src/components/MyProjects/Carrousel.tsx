
type CarrouselProps = { imageLinks: string[] };

// export const Carrousel = ({ imageLinks }: CarrouselProps) => {
//    return (
//       <div id="carouselExampleIndicators" classNameName="carousel slide" data-ride="carousel">
//          <ol classNameName="carousel-indicators">
//             <li data-target="#carouselExampleIndicators" data-slide-to="0" classNameName="active"></li>
//             <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//             <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//          </ol>
//          <div classNameName="carousel-inner">
//             {/* {imageLinks.map((imageUrl, index) => (
//                <div classNameName="carousel-item active">
//                   <img classNameName="d-block w-100" src={imageUrl} alt={`Slide ${index + 1}`} />
//                </div>
//             ))} */}
//             <div classNameName="carousel-item active">
//                <img classNameName="d-block w-100" src={imageLinks[0]} alt={`Slide ${1 + 1}`} />
//                <img classNameName="d-block w-100" src={imageLinks[1]} alt={`Slide ${1 + 1}`} />
//             </div>
//          </div>
//          <a classNameName="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//             <span classNameName="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span classNameName="sr-only">Anterior</span>
//          </a>
//          <a classNameName="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//             <span classNameName="carousel-control-next-icon" aria-hidden="true"></span>
//             <span classNameName="sr-only">Siguiente</span>
//          </a>
//       </div>
//    )
// }

export const Carrousel = ({ imageLinks }: { imageLinks: string[] }) => {
   return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
         <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
         </ol>
         <div className="carousel-inner">
            <div className="carousel-item active">
               <img className="d-block w-100" src={imageLinks[0]} alt="First slide" />
            </div>
            <div className="carousel-item">
               <img className="d-block w-100" src={imageLinks[1]} alt="Second slide" />
            </div>
         </div>
         <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
         </a>
         <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
         </a>
      </div>
   )
}