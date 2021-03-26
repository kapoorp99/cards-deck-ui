import React from 'react'
import './Card.css'

function Card({cardName}) {
    
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); 
        return 0;
    });
    return images;
      }
            
      const images = importAll(require.context('../assets/card_images/', false, /\.(png)$/));
    //   console.log(images);
      
    return (
        <div className="card">
            <img src={images[cardName+".png"].default} alt="" className="card__image" />
        </div>
    )
}

export default Card
