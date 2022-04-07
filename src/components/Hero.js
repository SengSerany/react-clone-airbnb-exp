import React from "react";

export default function Hero() {
    return (
        <div className="hero">
            <img className="img--hero" src={require("../images/photo-grid.png")} alt="Des photos d'exemples d'experiences Airbnb" />
            <h1>Online Experiences</h1>
            <h3>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
        </div>
    )
}