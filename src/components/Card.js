import React from "react"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card({img, rating, reviewCount, country, title, price}) {
    
    return (
        <section className="cards">
            <div className="card">
                <div className="card--header">
                    <div className="status--exp">
                        <p>SOLD-OUT</p>
                    </div>
                    <img src={require(`../images/${img}`)} alt="images de l'experience" className="img--card" />
                </div>
                <div className="card--main">
                    <div className="card--main--infos">
                        <div className="card--main--rate--location">
                            <img src={require("../images/star.png")} alt="star" className="card--img--star"/>
                            <p className="card--star--rate">{rating} <em className="card--em--rate--location"> ({reviewCount}) • {country}</em></p>
                        </div>
                        <p className="card--main--text">{title}</p>
                        <p className="card--main--price"><em className="card--em--price">From ${price}</em> / person</p>
                    </div>
                </div>
                <div className="card--footer"></div>
            </div>
        </section>
    )
}