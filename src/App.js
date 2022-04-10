import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./data";
import "./style.css";

export default function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <section className="cards">
                {Data.map( data =>
                    <Card 
                        id={data.id}
                        img={data.coverImg}
                        rating={data.stats.rating}
                        reviewCount={data.stats.reviewCount}
                        country={data.location}
                        title={data.description}
                        price={data.price}
                        openSpots={data.openSpots}
                />  
                )}
            </section>
        </div>
        
    )
}