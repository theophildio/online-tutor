import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./AddedCource.css";

const AddedCource = () => {
	
	return (
		<div>
			<div className="cource-details">
				<div className="cource-img">
					<img src="" alt="" />
				</div>
				<div className="cource-infos">
					<div className="infos">
						<p>{}</p>
						<p>
							<>${}</>
						</p>
					</div>
					<div className="remove-btn">
						<FontAwesomeIcon className="remove-icon" icon={faTrash}></FontAwesomeIcon>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddedCource;
