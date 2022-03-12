import { useEffect, useState, useRef } from 'react';
import './MenuCarrossel.css';
import rightarrow from "../../pages/img/rightarrow.png";


function MenuScroll() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);
  

  useEffect(() => {
    fetch('http://localhost:3000/produtos.json')
      .then((response) => response.json())
      .then(setData).then(console.log);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

    const handleRightClick = (e) => {
    e.preventDefault();


    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (

    <div className="scroll text-center">
       <h1 className="pt-5 text-white">Produtos </h1>
       <h3 className=" text-white">Conheça alguns dos produtos indígenas que são style </h3>
            <div className="buttons ">
           
              <button onClick={handleLeftClick}>
                <img src={rightarrow} alt="Scroll Left" />
              </button>
              <button onClick={handleRightClick}>
                <img src={rightarrow} alt="Scroll Right" />
              </button>
            </div>

      <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id, name, price, image } = item;
          return (
            <div className="item" key={id}>
    
             <a href='/'>
                  <img src={image} alt={name} />
             
                 <span className="price shadow">R$ {price}</span>
         
          </a>
                  
            
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default MenuScroll;