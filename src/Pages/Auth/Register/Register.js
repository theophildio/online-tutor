import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';


const Register = () => {
	const [
		createUserWithEmailAndPassword,
		user,
		loading,
		error,
	] = useCreateUserWithEmailAndPassword(auth);

	const navigate = useNavigate();

	const navigateToLogin = () => {
		navigate('/login');
	}

	const handleRegister = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		createUserWithEmailAndPassword(email, password);
	}

	if(user) {
		navigate('/login');
	}

  return (
    <div className="login-container">
			<h3>Register</h3>
			<div className="login-area">
				<form onSubmit={handleRegister} className="contact-form">
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
					<input className="tutor-btn" type="submit" value="Create account" />
				</form>
				<p><small>Already have an account?</small> <Link to="/login" onClick={navigateToLogin} className="signup">Log in</Link></p>
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

export default Register;