import React from  "react";

import image1 from "image1";
import image2 from "image2";
import image3 from "image3";
import image4 from "image4";
import image5 from "image5";

import "./styles.css";

const cards = [
    {
        header: "India",
        image : image1,
        text : "Image decription here."
    },
    {
        header: "Australia",
        image : image2,
        text : "Image decription here."
    },
    {
        header: "Singapore",
        image : image3,
        text : "Image decription here."
    },
    {
        header: "Britian",
        image : image4,
        text : "Image decription here."
    },
    {
        header: "Canada",
        image : image5,
        text : "Image decription here."
    }
];

function Accordion () {
    const [active, setActive] = React.useState(0);
    return (
        <section>
            {cards.map((card, index) => (
                <article key = {card.image}
                className={active === index ? "active" : ""}
                onClick={() => setActive(index)}
                >
                <img src ={card.image} />
                <div className="content">
                    <span>
                        photo_camera
                    </span>
                    <div>
                        <h2>{card.header}</h2>
                        <p>{card.text}</p>
                    </div>
                </div>
                </article>
            ))
            };
            

        </section>
    );
        };
