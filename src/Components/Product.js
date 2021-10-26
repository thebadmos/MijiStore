import React, { useState, useEffect } from 'react'


function Product() {
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])

  const fecthApi = () => {
    return (fetch(`https://fakestoreapi.com/products/`)
      .then(res => res.json())
      .then(json => 
        setProducts(json)
       ))
  }
  useEffect(() => {
    fecthApi()
  }, [])

   const filter = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())

  )

  return (
    <>
    <div id="store">
    <div id="contact">
      <h3>Search For A Product</h3>
      <div className="contact-input">
        <input
          type="email"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <p>Search</p>
      </div>
      </div>
         {filter.map((data, i)=>(
         <ul key={i * 5}>
           <div className="col-md-3">
        <div className="a-box">
         <div className="a-b-img">
          <img src={data.image} alt="im"/>
        </div>
        <li>
          <h5>{data.title.slice(0,36)}
          </h5> </li>
        <li>
          <h4>Price: ${data.price} </h4>
          </li>
        </div>
        </div>
      
        </ul>
      ))}
       </div>
      </>
     
      
     
   
  )
}

export default Product
