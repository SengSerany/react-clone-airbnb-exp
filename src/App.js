import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./style.css";

export default function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Card 
                img="katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life lessons with Katie Zaferes"
                price={136}
            />
        </div>
        
    )
}