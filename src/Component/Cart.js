import React from 'react'
import './cart.css'
import product from './Data'
const Cart = (props) => {
   var Pcont=0;
 const emptyCart=()=>{
  var Emp=document.getElementById('empty').innerHTML;
 }
 const PlusPro=()=>{
  product.map((val)=>{
    Pcont=props.proCount;
    if(Pcont<=0){
     props.setProCount(Pcont++)
    }
  })
  
 }
 const minusPro=()=>{
  if(Pcont>=0){
    props.setProCount(Pcont--)
   }
 }
  return (
   <>
   <div className='dis'>
   <table>
      <thead>
      <tr>
          <td>Product Id</td>
          <td>Product Name</td>
		      <td>Product Image</td>
          <td>Product price</td>  
          <td>Product Total Quantity</td> 
          <td>Total Price</td>      
          <td>Inc/Dec</td>
          
		      <td><a id='empty' href="#" onClick={emptyCart}>Empty Cart</a></td>
		  </tr>
      </thead>
      <tbody>
        <tr></tr>
        { product.map((val)=>{
          return<tr>
            <td>{val.id}</td>
            <td>{val.name}</td>
            <td><img id='tdimg' src={val.image}/></td>
            <td>{val.price}</td>
            <td>{val.quantity}</td>
            <td>{val.totalPrice}</td>
            <td><button id='plus' onClick={PlusPro}>+</button>{props.proCount}<button id='minus'  onClick={minusPro}>-</button></td>
          </tr>
        })}
      </tbody>
   </table>
   </div>
   
    
   </>
  )
}

export default Cart