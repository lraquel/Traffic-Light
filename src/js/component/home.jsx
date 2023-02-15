import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color,setColor] = useState("");
	return (
	  <div className="contenedor">
		<div className="poste"></div>

		 <div className="semaforo">
			<button 
			  onClick = {() => setColor("red")}
			  className={"light red" + ((color === "red") ? "glow" : "")}>

			</button>
			<button 
			  onClick = {() => setColor("yellow")}
			  className={"light yellow" + ((color === "yellow") ? "glow" : "")}>

			</button>
			<button 
			  onClick = {() => setColor("green")}
			  className={"light green" + ((color === "green") ? "glow" : "")}>

			</button>
			
		</div>
	  </div>	
	);
};

export default Home;
