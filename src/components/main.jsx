import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img"
            src="./images/Home2.jpg"
            alt="Card"
            height={700}
          />
          <div align="right" className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter "> <p>Shopping Cart</p>
              </h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                Shopping at Your DoorStep   
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
