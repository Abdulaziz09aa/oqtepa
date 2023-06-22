import React from 'react'
import "./Products.css" 
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { ADD_TO_CART, ADD_TO_LIKE, REMOVE_LIKE} from '../../context/action/ActionTypy'

import {PRODUCTS} from "../../static"


function Products() {
  
  const dispatch = useDispatch()
  const cart = useSelector(s=> s.cart)
  const likes = useSelector(s=>s.heart)



  const addHeart = (item)=>{
    let index = likes.findIndex(i=> i.id === item.id)
    if(index > -1){
      return
    }
    dispatch({type:ADD_TO_LIKE, payload: item})
  }

  
  const addToCart = (item) => {
    let index = cart.findIndex(i=> i.id === item.id)
    if ( index < 0 ) {
      return dispatch({type: ADD_TO_CART, payload: [...cart, {...item, qty: 1}]})
    }
    let newCart = cart.map((pro, inx)=> inx === index ? {...pro, qty: pro.qty + 1} : pro)
    dispatch( {type: ADD_TO_CART, payload:newCart } )
  }


  return (
    <div className='container'>
        <div className="products">
          <div className="products__katalog"></div>
          <div className="products__product">
            {
              PRODUCTS?.map((item, inx)=> <div key={inx} className="products__food">
                <div className="products__img">
                  <img src={item?.urls[0]} alt="" />
                  <div className="product__hearts">
                    <div className="product__heart">
                    {
                  likes?.some(i => i.id === item.id) ? 
                  <AiFillHeart style={{color: "red", cursor: "pointer"}} onClick={()=> dispatch({type:REMOVE_LIKE, payload: item.id})}/> : 
                  <AiOutlineHeart style={{cursor: "pointer"}} onClick={()=> addHeart(item)}/> 
                }
                    </div>
                  </div>
                  <h3>{item?.title}</h3>
                  <h4>{item?.price} <span>so'm</span></h4>
                  <button onClick={()=> addToCart()} className='product__button'>Qo'shish</button>
                </div>
              </div>)
            }
            
          </div>
        </div>
    </div>
  )
}

export default Products