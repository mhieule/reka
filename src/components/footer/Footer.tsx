import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Practice</a>
              </li>
              <li>
                <a href="#">Discuss</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <ul className="social-icons">
              <li>
                <a href="#" target="_blank">
                  <img src="src/assets/facebook.png" alt="Facebook" />
                </a>
                <a href="#" target="_blank">
                  <img src="src/assets/linkedin.png" alt="Twitter" />
                </a>
                <a href="#" target="_blank">
                  <img src="src/assets/twitter.png" alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@chadgpt.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 EureAI. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
