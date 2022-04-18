import React from "react";
import './AddedCource.css';

const AddedCource = ({cource}) => {
  const {image, title, fee} = cource;
	return (
		<div>
			<div className="cource-details">
				<div className="cource-img">
					<img src={image} alt="" />
				</div>
				<div className="cource-infos">
					<p>{title}</p>
					<p>
						<small>${fee}</small>
					</p>
				</div>
			</div>
		</div>
	);
};

export default AddedCource;
