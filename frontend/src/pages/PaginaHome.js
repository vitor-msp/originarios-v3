import { Carousel } from "react-bootstrap";
import img1 from "../pages/img/img1.png";
import img2 from "../pages/img/img2.png";
import img3 from "../pages/img/img3.png";
import Andryele from "../pages/img/Andryele.png";
import Amanda from "../pages/img/Amanda.png";
import Carla from "../pages/img/Carla.png";
import Diego from "../pages/img/Diego.png";
import John from "../pages/img/John.png";
import Vitor from "../pages/img/Vitor.png";
import grafismo from "../pages/img/grafismo.png";
import bannerFloresta from "../pages/img/bannerFloresta.png";
import MenuCarrossel from "../components/layout/MenuCarrossel";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function PaginaHome() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Carousel className="estiloBorder d-flex animate__animated animate__fadeIn animate__delay-2s">
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Originarios</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Originarios</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Originarios</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container">
        {/* <div className="logo">     
       <img src="../components/layout/img/1.png" alt="" />
     </div> */}
        {/* <div className="carousel">
       <div className="item">
          <div className="image">
              <img src={imgA} alt="" />
            </div>
            <div className="info">
              <span className="name">NomeDoProduto</span>
              <span className="oldPrice">R$ 300,00</span>
              <span className="price">R$ 250,00</span>
              
              </div>
         </div>
         <div className="item">
          <div className="image">
              <img src={imgA} alt="" />
            </div>
            <div className="info">
              <span className="name">NomeDoProduto</span>
              <span className="oldPrice">R$ 300,00</span>
              <span className="price">R$ 250,00</span>
              
              </div>
         </div>
         <div className="item">
          <div className="image">
              <img src={imgA} alt="" />
            </div>
            <div className="info">
              <span className="name">NomeDoProduto</span>
              <span className="oldPrice">R$ 300,00</span>
              <span className="price">R$ 250,00</span>
              
              </div>
         </div>
         <div className="item">
          <div className="image">
              <img src={imgA} alt="" />
            </div>
            <div className="info">
              <span className="name">NomeDoProduto</span>
              <span className="oldPrice">R$ 300,00</span>
              <span className="price">R$ 250,00</span>
              
              </div>
         </div>
         <div className="item">
          <div className="image">
              <img src={imgA} alt="" />
            </div>
            <div className="info">
              <span className="name">NomeDoProduto</span>
              <span className="oldPrice">R$ 300,00</span>
              <span className="price">R$ 250,00</span>
              
              </div>
         </div>
         <div className="item">
          <div className="image">
              <img src={imgA} alt="" />
            </div>
            <div className="info">
              <span className="name">NomeDoProduto</span>
              <span className="oldPrice">R$ 300,00</span>
              <span className="price">R$ 250,00</span>
              
              </div>
         </div>
     </div>*/}

        <MenuCarrossel />
      </div>

      <section
        className="page-section mb-5 text-white container alunosRecode"
        style={{
          backgroundImage: `url(${bannerFloresta})`,
          backgroundPosition: "center-top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          padding: "0 10px",
          width: "90%",
          borderWidth: " medium",
          borderStyle: "solid",
          borderColor: " #fff",
        }}
      >
        <div
          className="col--12 col-md-12 col-lg-11 mx-auto p--5 px-md-0"
          data-aos="zoom-out-right"
        >
          <div className="col--12 col-md-10 col-lg-10 mx-auto p--5 px-md-0 ">
            <br />
            <img
              src={grafismo}
              alt=""
              width="80%"
              height="40px"
              style={{
                marginLeft: "10%",
                objectFit: "cover",
                filter: "invert(100%)",
              }}
            />
            <br />
            <br />
            <h1 style={{ textAlign: "center" }}>Quem somos?</h1>
            <br />
            <h4 className="text-center">
              A plataforma Originários foi desenvolvida durante a Recode Pro
              2021. Como projeto final, os alunos do Squad 41 escolheram o tema
              Indígenas e criaram está plataforma, que tem o objetivo de trazer
              mais visibilidade aos produtores indígenas e divulgar a riqueza de
              sua cultura.
            </h4>
            <br />
            <h1 style={{ textAlign: "center" }}>O que fazemos?</h1>

            <br />
            <h4 className="text-center">
              A Originários promove o contato entre os habitantes dos centros
              urbanos e a sofisticada arte dos povos da floresta. Através de uma
              curadoria apurada, mostramos quão contemporâneas e atuais são as
              manifestações estéticas destes povos, sempre fundamentadas por
              saberes ancestrais transmitidos há várias gerações.
            </h4>
            <br />
            <br />
            <img
              src={grafismo}
              width="80%"
              height="40px"
              alt=""
              style={{
                marginLeft: "10%",
                objectFit: "cover",
                filter: "invert(100%)",
              }}
            />
            <br />
            <br />
          </div>
        </div>
      </section>

      <section className="page-section bg-transparent pt-5" id="team">
        <div className="container text-center alunosRecode" data-aos="zoom-in">
          <div className="text-center mb-5 text-white">
            <h2 className="section-heading text-uppercase">
              Equipe Desenvolvedores
            </h2>
            <h3
              className="section-subheading text-white"
              style={{ color: "#ffc800 !important" }}
            >
              Alunos Recode Pro - Squad 41.
            </h3>
          </div>
          <div className="row text-white">
            <div className="col-lg-4">
              <div className="team-member mb-5" data-aos="flip-right">
                <img
                  className="mx-auto rounded-circle"
                  src={Andryele}
                  alt="..."
                  style={{
                    width: "14rem",
                    height: "14rem",
                    border: " 0.5rem solid #bf7e04",
                  }}
                />
                <h4 style={{ color: "#365902 !important" }}>Andryele Pires</h4>
                <p className="" style={{ color: "#365902 !important" }}>
                  Developer
                </p>

                <a
                  className="btn btn-dark btn-social mx-2 justify-content-center"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                  href="https://github.com/andrypires"
                  target="blank"
                >
                  <svg
                    className="svg-inline--fa fa-github fa-w-16"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="github"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    ></path>
                  </svg>
                  <i className="fab fa-github"></i>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2 justify-content-center "
                  style={{ width: "2.5rem", height: "2.5rem" }}
                  href="https://www.linkedin.com/in/andryele-pires-0b99a6231/"
                >
                  <svg
                    className="svg-inline--fa fa-linkedin-in fa-w-14"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member mb-5" data-aos="flip-up">
                <img
                  className="mx-auto rounded-circle"
                  src={Amanda}
                  alt="..."
                  style={{
                    width: " 14rem",
                    height: "14rem",
                    border: " 0.5rem solid #bf7e04",
                  }}
                />
                <h4 style={{ color: "#365902 !important" }}>Amanda Santos</h4>
                <p className="" style={{ color: "#365902 !important" }}>
                  Developer
                </p>

                <a
                  className="btn btn-dark btn-social mx-2 justify-content-center"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                  href="https://github.com/AmandaRgina"
                  target="blank"
                >
                  <svg
                    className="svg-inline--fa fa-github fa-w-16"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="github"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    ></path>
                  </svg>
                  <i className="fab fa-github"></i>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2 justify-content-center "
                  style={{ width: "2.5rem", height: "2.5rem" }}
                  href="https://www.linkedin.com/in/amanda-santos-0920b4130"
                >
                  <svg
                    className="svg-inline--fa fa-linkedin-in fa-w-14"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member mb-5" data-aos="flip-left">
                <img
                  className="mx-auto rounded-circle"
                  src={Carla}
                  alt="..."
                  style={{
                    width: " 14rem",
                    height: "14rem",
                    border: " 0.5rem solid #bf7e04",
                  }}
                />
                <h4 style={{ color: "#365902 !important" }}>Carla Ribeiro</h4>
                <p className="" style={{ color: "#365902 !important" }}>
                  Developer
                </p>

                <a
                  className="btn btn-dark btn-social mx-2 justify-content-center"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                  href="https://github.com/CarlaGRibeiro"
                  target="blank"
                >
                  <svg
                    className="svg-inline--fa fa-github fa-w-16"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="github"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    ></path>
                  </svg>
                  <i className="fab fa-github"></i>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2 justify-content-center "
                  style={{ width: "2.5rem", height: "2.5rem" }}
                  href="https://www.linkedin.com/in/carla-ribeiro-34a3031b7"
                >
                  <svg
                    className="svg-inline--fa fa-linkedin-in fa-w-14"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member mb-5" data-aos="flip-right">
                <img
                  className="mx-auto rounded-circle"
                  src={Diego}
                  alt="..."
                  style={{
                    width: " 14rem",
                    height: "14rem",
                    border: " 0.5rem solid #bf7e04",
                  }}
                />
                <h4 style={{ color: "#365902 !important" }}>Diego Costa</h4>
                <p className="" style={{ color: "#365902 !important" }}>
                  Developer
                </p>

                <a
                  className="btn btn-dark btn-social mx-2 justify-content-center"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                  href="https://github.com/diegocostaxp"
                  target="blank"
                >
                  <svg
                    className="svg-inline--fa fa-github fa-w-16"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="github"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    ></path>
                  </svg>
                  <i className="fab fa-github"></i>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2 justify-content-center "
                  style={{ width: "2.5rem", height: "2.5rem" }}
                  href="https://www.linkedin.com/in/diegodealmeidacosta/"
                >
                  <svg
                    className="svg-inline--fa fa-linkedin-in fa-w-14"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member mb-5" data-aos="flip-down">
                <img
                  className="mx-auto rounded-circle"
                  src={John}
                  alt="..."
                  style={{
                    width: " 14rem",
                    height: "14rem",
                    border: " 0.5rem solid #bf7e04",
                  }}
                />
                <h4 style={{ color: "#365902 !important" }}>John Michael</h4>
                <p className="" style={{ color: "#365902 !important" }}>
                  Developer
                </p>

                <a
                  className="btn btn-dark btn-social mx-2 justify-content-center"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                  href="https://github.com/JohnMichaelDeveloper"
                  target="blank"
                >
                  <svg
                    className="svg-inline--fa fa-github fa-w-16"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="github"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    ></path>
                  </svg>
                  <i className="fab fa-github"></i>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2 justify-content-center "
                  style={{ width: "2.5rem", height: "2.5rem" }}
                  href="https://www.linkedin.com/in/johnmichaelpeixoto/"
                >
                  <svg
                    className="svg-inline--fa fa-linkedin-in fa-w-14"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member mb-5" data-aos="flip-left">
                <img
                  className="mx-auto rounded-circle"
                  src={Vitor}
                  alt="..."
                  style={{
                    width: " 14rem",
                    height: "14rem",
                    border: " 0.5rem solid #bf7e04",
                  }}
                />
                <h4 style={{ color: "#365902 !important" }}>Vitor Mateus</h4>
                <p className="" style={{ color: "#365902 !important" }}>
                  Developer
                </p>

                <a
                  className="btn btn-dark btn-social mx-2 justify-content-center"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                  href="https://github.com/vitor-msp"
                  target="blank"
                >
                  <svg
                    className="svg-inline--fa fa-github fa-w-16"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="github"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    ></path>
                  </svg>
                  <i className="fab fa-github"></i>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2 justify-content-center "
                  style={{ width: "2.5rem", height: "2.5rem" }}
                  href="https://www.linkedin.com/in/vitor-msp/"
                >
                  <svg
                    className="svg-inline--fa fa-linkedin-in fa-w-14"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row d-inline-block mt-3">
            <div className="col-lg-8 mx-auto  text-center">
              <p
                className="large text-white"
                style={{ color: "#365902 !important" }}
              >
                Conheça um pouco mais nossos desenvolvedores e acesse nossas
                redes sociais!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
