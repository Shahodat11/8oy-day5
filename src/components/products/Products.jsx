import React from 'react'
import "./Products.css"

// Trust but Verify
const Products = ({data}) => {

  let productItems = data?.map(el =>(
    <div key={el.id} className="card">
      <img src={el.images[0]} alt="" />
      <h3 className='title'>{el.title}</h3>
    </div>
  ) ) 
  return (
    <div>
        <div className="wrapper">
           {productItems}
        </div>
    </div>
  )
}

export default Products



// let arr = [ 5, 15,  20]

// console.log( arr.some(i => i > 10) ); // ||
// console.log( arr.every(i => i > 10) ); // &&


let user = {
  id: 1,
  name: "John",
  age: 32,
  gender: "male",
  profession: "Developer",
  address: "New York",
  tel: "998911234567"
}