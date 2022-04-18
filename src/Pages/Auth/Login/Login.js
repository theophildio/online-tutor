import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";

const Login = () => {
	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	] = useSignInWithEmailAndPassword(auth);
	const navigate = useNavigate();

	const handleLogin = e => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		signInWithEmailAndPassword(email, password);
	}

	const navigateToRegister = () => {
		navigate('/register');
	}

	if(user) {
		navigate('/checkout');
	}


	return (
		<div className="login-container">
			<h3>Login</h3>
			<div className="login-area">
				<form onSubmit={handleLogin} className="contact-form">
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
          <p><small>No account? <span onClick={navigateToRegister} className="signup">Register</span></small></p>
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
