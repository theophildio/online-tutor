import React from "react";
import { Outlet } from "react-router-dom";
import useCources from "../../Hooks/useCources";
import AddedCource from "../AddedCource/AddedCource";
import "./Checkout.css";

const Checkout = () => {
	const [cources] = useCources();
	return (
		<div className="checkout">
			<h3>Checkout</h3>
			<hr />
			<div className="checkout-container">
				<div className="checkout-form">
					<h4>Fill up the checkout form</h4>
					<form className="contact-form">
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Your name"
							required
						/>
						<input
							type="text"
							name="address"
							id="address"
							placeholder="Your address"
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
							type="tel"
							name="phone"
							id="phone"
							placeholder="Your phone"
							required
						/>
						<input className="tutor-btn" type="submit" value="Proceed" />
					</form>
				</div>
				<div className="added-cources">
					<h4>Your cources :</h4>
					<AddedCource></AddedCource>
				</div>
			</div>
			<Outlet></Outlet>
		</div>
	);
};

export default Checkout;
