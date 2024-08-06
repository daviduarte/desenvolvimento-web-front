import React, { useState } from "react";
import styles from "../styles/SearchItems.module.css"
import HttpRequest from "../utils/HttpRequest";

export default function SearchCamera() {
  

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [type, setType] = useState("")
    const [brand, setBrand] = useState("")

    const updateData = (searchParam) => {
  
      setFilters(searchParam)
    }

    const searchButtonPressed = () => {
        console.log("Pressionou o botão")

    }

  return (
   <div className='container'>
    <div className='row'>
      <h2 className={styles.green}>Search Items</h2>
    <div className='col-2'>
      <label>Name: </label>
      <input id="name-field" className='form-control' type="text" value={name} onChange={ (e) => setName(e.target.value) }/>
    </div>
    <div className='col-2'>
      <label>Price: </label>
      <input id="price-field" className='form-control' type="number" value={price} onChange={ (e) => setPrice(e.target.value) }/>
    </div>
      <div className='col-2'>
        <label>Type: </label>
        <input id="type-field" className='form-control' type="text" value={type} onChange={ (e) => setType(e.target.value) }/>        
      </div>
      <div className='col-2'>
        <label>Brand: </label>
        <input id="brand-field" className='form-control' type="text" value={brand} onChange={ (e) => setBrand(e.target.value) }/>              
      </div>

      <div className='row '>
        <div className='col-4' />
          <button type="button" className="btn btn-dark col-5 mt-3" onClick={searchButtonPressed}>Search</button>
      </div>
    </div>
  </div>
  );
}
