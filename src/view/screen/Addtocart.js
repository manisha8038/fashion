import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { product } from "../data/data";
import axios from "axios";
const Addtocart = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);


useEffect(()=>{
  async function show(){
    let res =await axios.post("showtocart",{}).catch(err=>alert(err))
    console.log(res?.data);
    setSelectedProducts(res?.data)
  }
  show()
})
async function show(){
  let res =await axios.post("showtocart",{}).catch(err=>alert(err))
  console.log(res?.data);
  setSelectedProducts(res?.data)
}
  // Function to handle adding a product to the cart
  const handleAddtocart =async (product) => {
    let params={
      ...product
    }
    let res =await axios.post("addtocart",params).catch(err=>alert(err))
      console.log(res.data);
      let {success,message,data} =res.data
      if(success){
      alert(message)
      show()
      }
      else{
        alert(message)
       }
   // setSelectedProducts([...selectedProducts, product]);
    //window.alert('Item added to cart.');
  };
  
  // Function to handle removing a product from the cart
  const handleRemoveFromCart = async(product) => {
    const updatedProducts = selectedProducts.filter(
      (selectedProduct) => selectedProduct.id !== product.id
    );
    let res =await axios.post("removecartitem",updatedProducts).catch(err=>alert(err))
    console.log(res?.data);
    
    show()
    //setSelectedProducts(updatedProducts);
    window.alert('Item removed from cart.');
  };

  // Calculate the total price of all selected products
  const totalPrice = selectedProducts.reduce((acc, curr) => {
    return typeof curr.sellrate === "number" ? acc + curr.sellrate : acc;
  }, 0);
  
  console.log(totalPrice)

  return (
    <div className="container my-5">
      <h1 className="mb-3">Add to Cart</h1>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h5>Select Products</h5>
            </div>
            <div className="card-body">
              <div className="row">
                {product.map((product) => (
                  <div className="col-md-4 mb-3" key={product.id}>
                    <div className="card h-100">
                      <img
                        src={product.img}
                        className="card-img-top"
                        alt={product.name}
                      />
                      <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <h4 className="card-text">Price:₹{product.sellrate}</h4>
                        {/* <h2 >Price:<del>  {product.mrprate} </del></h2> */}
                        <h4>Discount:{product.dis}</h4>
                      </div>
                      <div className="card-footer">
                        <button
                          className="btn btn-primary"
                          onClick={() => handleAddtocart(product)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5>Cart</h5>
            </div>
            <div className="card-body">
              {selectedProducts.length > 0 ? (
                <ul className="list-group">
                  {selectedProducts.map((product) => (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center"
                      key={product.id}
                    >
                      {product.name} = ₹{product.sellrate}
                      {/* <span className="badge badge-primary badge-pill">
                        {product.price}
                      </span> */}
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemoveFromCart(product)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Total Price = ₹{totalPrice}
                    {/* <span className="badge badge-primary badge-pill">
                      {totalPrice}
                    </span> */}
                  </li>
                </ul>
              ) : (
                <p>No items in cart</p>
              )}
            </div>
            <div className="card-footer">
        
              {/* <Link
                to={{
                  pathname: "/Payment",
                  state: { selectedProducts: selectedProducts },
                }}
                className="btn btn-primary"
              >
                Checkout
              </Link> */}
              <Link to={{ pathname: '/payment', state: selectedProducts  }}
              className="btn btn-primary">Proceed to Payment</Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtocart;
