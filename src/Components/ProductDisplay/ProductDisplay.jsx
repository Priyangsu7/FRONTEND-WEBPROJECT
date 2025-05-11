import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../../assets/star_icon2.png"

import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
  const { product } = props;
  const {addTocart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" height="150px" />
          <img src={product.image} alt="" height="150px" />
          <img src={product.image} alt="" height="150px" />
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product.image} alt="" height="300px" />
        </div>
      </div>
      <div className="productdisplay-right">
<h1>{product.name}</h1>
<div className="productdisplay-right-star">
  <img src={star_icon} alt="" height="20px" />

  <p>(130)</p>
</div>
<div className="productdisplay-right-prices">
  <div className="productdisplay-right-price-old">
${product.old_price}
  </div>
  <div className="productdisplay-right-price-new">
    ${product.new_price}
  </div>
  </div>
  <div className="productdisplay-right-description">
  Trendy sneakers aren’t just shoes—they’re a lifestyle statement. Whether you're hitting the streets, hanging out with friends, or elevating your everyday look, the right pair of kicks can instantly upgrade your vibe. Today’s hottest sneakers blend bold design with ultimate comfort, combining retro aesthetics with modern flair. From chunky soles and sleek silhouettes to vibrant colorways and limited-edition collabs, each pair tells its own story. They're not just built to walk—they're made to stand out. So lace up, turn heads, and own your style—because sneakers are more than footwear, they’re an attitude.


  </div>
  <div className='productdisplay-right-size'>
    <h1>Select Size</h1>
    <div className="productdisplay-right-sizes">
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
    </div>
  </div>
  <button onClick={()=>{addTocart(product.id)}}>ADD TO CART</button>
  <div className="productdisplay-right-category">
    <span>Category:<span>Sneakers</span></span>
  </div>
  <div className="productdisplay-right-category">
    <span>Tags:<span>Modern ,Latest , Trend Sneakers</span></span>
  </div>
</div>
      </div>
    
  )
}

export default ProductDisplay