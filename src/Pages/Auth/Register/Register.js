import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


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
	if(user) {
		navigate('/login');
	}

	const handleRegister = (e) => {
		e.preventDefault();
		const displayName = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		createUserWithEmailAndPassword(email, password);
	}

  return (
    <div className="login-container">
			<h3>Register</h3>
			<div className="login-area">
				<form onSubmit={handleRegister} className="contact-form">
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Your name"
						required
					/>
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
					<SocialLogin></SocialLogin>
				</div>
			</div>
		</div>
  );
};

export default Register;