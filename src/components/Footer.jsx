import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <h1>INDIA RECIPE</h1>
          <button>Main Newsletter</button>
          <p>Follow Us</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>

          </div>
        </div>
        <div className="footer-center">
          <p><a href="#">Dinners</a></p>
          <p><a href="#">Meals</a></p>
          <p><a href="#">Ingredients</a></p>
          <p><a href="#">Occasions</a></p>
          <p><a href="#">Cuisines</a></p>
          <p><a href="#">Kitchen Tips</a></p>
          <p><a href="#">News Features</a></p>
        </div>
        <div className="footer-right">
          <p><a href="#">Editorial Prices</a></p>
          <p><a href="#">Privacy Policy</a></p>
          <p><a href="#">Terms of Service</a></p>
          <p><a href="#">Careers</a></p>
          <p><a href="#">About Us</a></p>
          <p><a href="#">Contact</a></p>
        </div>
      </div>
      <p>&copy; 2023 Indian Recipes</p>
    </footer>
  );
};

export default Footer;
