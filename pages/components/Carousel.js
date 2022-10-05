export default function Carousel() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade bg-light" data-bs-touch="false" data-bs-interval="false">
      <div className="carousel-inner" style={{ 'padding': '1em' }}>
        <div className="carousel-item active">
          <img src='/assets/images/carousel-1.png' className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <video controls className="d-block w-100 img-fluid " autoplay loop muted>
            <source src="/assets/videos/video.webm" type="video/webm"></source>
          </video>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}