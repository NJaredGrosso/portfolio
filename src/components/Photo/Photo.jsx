import React from "react";
import "./photo.css";
import img from "./jimage.jpeg";

export default function Photo() {
	return <img src={img} alt="imagen perfil" className="photo" />;
}
