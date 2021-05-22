import react from 'react';
import data from './data';

function App() {
  return(
  <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/">Home</a>
        </div>
        <div>
            <a href="/cart" >Cart</a>
            <a href="/login">Login</a>
        </div>
    </header>

    <main>
      <div className="row center">
        {
          data.products.map(prod => (
            <div key={prod._id} className="product">
                <a href={`/product/${prod.name}`}>
                    <img className="medium" src={prod.image} alt={prod.name}/>
                </a>
                <div className="card-body">
                    <a href={`/product/${prod.name}`}>
                        <h2> {prod.name} </h2>
                        <h3>{prod.desc}</h3>
                    </a>
                    <div className="rating">
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                    </div>
                    <div className="price">${prod.price}</div>
                </div>
            </div>
          ))
        }
      </div>
    </main>

    <footer className="row center">
        Copyright 2021
    </footer>
</div>
  );
}

export default App;
