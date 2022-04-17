import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="login-container">
			<h3>Login</h3>
			<div className="login-area">
				<form className="contact-form">
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Your email"
						required
					/>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Your password"
						required
					/>
					<input className="tutor-btn" type="submit" value="Log in" />
          <p><small>No account? <Link className="signup" to="/register">Create one</Link></small></p>
				</form>
				<div className="other-login">
					<div className="divider">
						<hr />
						<span>or use one of these options</span>
						<hr />
					</div>
					<div className="social-logins">
						<button className="tutor-btn"><FontAwesomeIcon className="social-icon" icon={faGoogle}></FontAwesomeIcon> Google</button>
						<button className="tutor-btn"><FontAwesomeIcon className="social-icon" icon={faFacebook}></FontAwesomeIcon> Facebook</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
