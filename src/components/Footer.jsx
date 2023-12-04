import React from "react";

const Footer = () => {
  return (
    <footer className="mb-0 text-center bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <p>&copy; {new Date().getFullYear()} shoppingCart. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
