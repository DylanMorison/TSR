import React from "react";
import "./style.scss";
import Logo from "./../../assets/graphics/logo.png";

const Header = () => {
	return (
		<header data-test="headerComponent" className="headerComponent">
			<div className="wrap">
				<div className="logo">
					<img data-test="logoIMG" className="logoIMG" src={Logo} alt="Logo" />
				</div>
			</div>
		</header>
	);
};

export default Header;
