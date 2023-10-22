import Footer from "../components/Footer"
import PagesHeader from "../components/PagesHeader"

const Portfolio = () => {
  return (
    <>
      <PagesHeader name='Portfolio' style={{zIndex: '2'}} />
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: "space-around", margin: "5rem", }}>
        <div className="post">
            <img  src="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery1.jpg" alt="post" /> 
            <div className="imgLink 1">
                <a href="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery1.jpg"><i className="fa-solid fa-magnifying-glass-plus"></i></a>
            </div> 
        </div>

        <div className="post" >
            <img  src="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery2.jpg" alt="post" />
            <div className="imgLink 2">
                <a href="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery2.jpg"><i className="fa-solid fa-magnifying-glass-plus"></i></a>
            </div>    
        </div>

        <div className="post">
            <img  src="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery3.jpg" alt="post" />
            <div className="imgLink 3">
                <a href="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery3.jpg"><i className="fa-solid fa-magnifying-glass-plus"></i></a>
            </div>  
        </div>

        <div className="post">
            <img  src="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery4.jpg" alt="post" />
            <div className="imgLink 4">
                <a href="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery4.jpg"><i className="fa-solid fa-magnifying-glass-plus"></i></a>
            </div> 
        </div>
      </div>
      <Footer />
    </>
    
  )
}

export default Portfolio