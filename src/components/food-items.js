import React, { useState } from 'react';
import data from '../feeds.json';

const FoodItems = ()=>{
  const [total,setTotal] = useState(1);
  const [cost,setCost] = useState();
  const addHandler = ()=>{
      setTotal(total+1)
  }
  const minusHandler = ()=>{
    setTotal(total)
}
    return(
        <>
          <div className='product-center'>
            <img src=''/>
              <div className='product_main'>
                    {data.map((product,i)=>{
                    return(
                      <div className='product_card' key={i+1}>
                            <img className='product_image' src={product.image} alt="img"/>
                            <div className="cardtext-content">
                              <h4>{product.name}</h4>
                              <p>Price:{product.price}</p>
                              <p>Total:{total}</p>
                              <p>Cost(INR)</p>
                              <div className="plusMinusBtn">
                              <button onClick={addHandler}>+</button>
                              <button onClick={minusHandler}>-</button>
                            </div>
                            </div>
                      </div>
                    )
                  })}
              </div>
          </div>
        </>
    )
}
export default FoodItems;