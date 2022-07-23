import React from "react";
import "./Features.scss"
import Feature from './Feature'
export default function FeaturesContainer() {
  const Features = [
    {
      name: "Cat",
      src: require("./Imgs/Cat.jpg"),
      title: 'Cat Supplies',
      text: 'Buy Best Quality Cat Supplies With Least Price!',
    },
    {
      name: "Dog",
      src: require("./Imgs/Dog.jpg"),
      title: 'Dog Care',
      text: 'We Got Special Care For Your Dog!',

    },
    {
      name: "Parrot",
      src: require("./Imgs/Parrot.webp"),
      title: 'Home Birds',
      text: 'Got A Bird? We Have Special Treats For You!',

    },
  ];

  return (
    <div className="container FeaturesContainer">
      <div className="row FeaturesRow">
        {Features.map((feature) => (
          <Feature key={feature.name} src={feature.src} name={feature.name} title={feature.title} text={feature.text}/>
        ))}
      </div>
    </div>
  );
}
