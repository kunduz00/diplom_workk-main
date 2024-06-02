import "./Home.css";
import golfImg from "../../img/Golf.jpg"
import soccerImg from "../../img/soccer.jpg"
import hoverImg1 from "../../img/voll.png"
import { Link } from "react-router-dom";


function Home() {
  


  return (
    <>

    <section className="home">
      <div className="container">

        <h2 className="home_tit"> ASICS </h2>

        <p className="home_txt">ASICS, a brand known for its commitment to innovation, quality, and performance. With a long history of creating cutting-edge athletic footwear and apparel, ASICS continues to push the boundaries of what is possible in sportswear. Their dedication to creating products that help athletes perform at their best is unmatched, making them a trusted choice for runners, tennis players, and fitness enthusiasts around the world.</p>

      </div>
    </section>

    <section className="hover_card">
      <div className="container">
        <div className="hover_cards flex">

        <div class="hover-effect-btn">
          <img className="vol_img" src={hoverImg1} alt="" />
          <h3 class="title">Volleyball</h3>
          <div class="overlay"></div>
        <div class="button"><a href="#">shop</a></div>
        </div>

        <div class="hover-effect-btn">
          <img className="shop_img" src={golfImg} alt="" />
          <h3 class="title">Golf </h3>
          <div class="overlay"></div>
        <div class="button"><a href="#">shop</a></div>
        </div>

        <div class="hover-effect-btn">
          <img className="shop_img" src={soccerImg} alt="" />
          <h3 class="title">Soccer </h3>
          <div class="overlay"></div>
        <div class="button"><a href="#">shop</a></div>
        </div>

        </div>
      </div>
    </section>

    <section className="golf">
      <div className="container">
       <h2 className="golf_tit">Ace your game</h2>

       <p className="golf_txt">Tournament - ready tennis gear designed to fit your playstyle.</p>

       <Link to="/categories/tennis	" className="home_btn">shop</Link>

      </div>
    </section>
      
    </>
  );
}

export default Home;