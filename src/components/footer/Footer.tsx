import "./Footer.css";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
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
                  <img src={facebook} alt="Facebook" />
                </a>
                <a href="#" target="_blank">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
                <a href="#" target="_blank">
                  <img src={twitter} alt="Twitter" />
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
