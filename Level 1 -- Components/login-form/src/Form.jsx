import "./Form.css";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
function Form() {
  return (
    <form className="form">
      <div className="top">
        <h2>Log in</h2>
        <span className="line"></span>
        <div className="social-links">
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaGoogle />
          </a>
        </div>
        <p>or login with e-mail</p>
      </div>
      <div className="input-container">
        <div className="email">
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" placeholder="Enter your email" />
        </div>
        <div className="password">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter your password"
          />
        </div>

        <div className="check">
          <div className="check-container">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember Me</label>
          </div>
          <a href="#">Forgot Password</a>
        </div>
      </div>

      <button type="submit">Submit</button>

      <div className="terms-condition">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Condition</a>
      </div>
    </form>
  );
}

export default Form;
