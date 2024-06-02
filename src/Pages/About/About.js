import './About.css'
import aboutFon from "../../img/about_img.jpg"


function About() {
  return ( 

    <>
    <section className="About_main">
        <div className="container">
          <h2 className="about_tit">About Company</h2>

          <p className="about_info">THE HISTORY OF THE ASICS BRAND</p> 

          <p className="about_txt"> ASICS is a global leader in the production of sports shoes and clothing, known for its commitment to innovation, high quality and support for an active lifestyle. In this article, we will talk about the representation of ASICS in Russia and how the brand was able to win the hearts of many athletes.</p>

          <p className="about_txt about_txt_2">ASICS is an acronym for the Latin phrase "Anima Sana In Corpore Sano", which means "A healthy mind in a healthy body". The brand was founded in Japan in 1949 and has since become an important player in the sportswear and footwear industry.</p>
        </div>
    </section>

    <section>
      <div className="container">

        <div className="about_img flex">
          

        <div className="about_fon_all_txt">
          <p className="about_info about_fon_txt">ASICS IN RUSSIA</p>
          <p className=" about_txt about_txt2 ">The ASICS representative office in Russia is actively working for the benefit of the sports community. The brand's stores are located in major cities, offering a wide range of products – from running shoes to stylish sportswear. Professional consultants are always ready to help you choose the perfect option for your needs. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi fugit dolor error dolorem debitis quas rerum officiis quia perspiciatis, quam quod velit excepturi hic, esse incidunt explicabo mollitia recusandae! Vero.</p>
        </div>

        <div >
            <img className="press_item" src={aboutFon} alt="" />
          </div>

        </div>

      </div>
    </section>

    </>
  );
}

export default About;