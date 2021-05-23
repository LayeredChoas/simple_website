import React from "react";
import data from "../data";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

export default function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);

  console.log(product);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <div>
      <Link to="/"> Back To Results</Link>

      <div className="row top">
        <div className="col-2">
          <img class="medium" src={product.image} alt={product.name} />
        </div>

        
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating
                key={product._id}
                rating={product.rating}
                num_rev={product.num_rev}
              ></Rating>
            </li>
            <li>Price: ${product.price}</li>
            <li>{product.desc}</li>
          </ul>
        </div>

        <div className="col-1">
          <div className="prod_info">
          
          <div className="card card-body">
            <ul>
              <li>
                <div className="row"></div>
                <div className="price_box">
                  Price:  {" "} <div className="price"> ${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row"></div>
                <div className="status_box">Status: {" "}
                <div>
                  {product.stock > 0 ? (
                    <span className="success">In Stock</span>
                  ) : (
                    <span className="fail">Unavailable</span>
                  )}
                </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add To Cart</button>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
