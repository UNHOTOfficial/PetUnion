import React from "react";
import Collapse from "./Collapse";
import RefundForm from "./RefundForm";
import TopCard from "./TopCard";

export default function Refund() {
  const collapses = [
    {
      title: "i'm not satisfied with my order.",
      paragraph: "tr",
    },    {
      title: "i'm not satisfied with my order.",
      paragraph: "tr",
    },    {
      title: "i'm not satisfied with my order.",
      paragraph: "tr",
    },    {
      title: "i'm not satisfied with my order.",
      paragraph: "tr",
    },    {
      title: "i'm not satisfied with my order.",
      paragraph: "tr",
    },    {
      title: "i'm not satisfied with my order.",
      paragraph: "trLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum diam et sapien ullamcorper ornare. Vivamus eget vehicula ligula. Suspendisse potenti. Fusce scelerisque ligula ex, id mattis ex ultricies a. Nulla vel aliquam dui. In porta malesuada lectus, nec lobortis dui venenatis sit amet. Vestibulum non tincidunt tellus, id bibendum lectus. Nam consectetur, lectus sit amet consequat commodo, justo lectus faucibus tortor, eu sagittis leo tellus in ligula. Proin posuere sapien ac dolor sollicitudin rutrum. Nam blandit fermentum urna, vitae congue elit scelerisque non. Suspendisse malesuada massa nec malesuada pulvinar. Cras non turpis justo. Quisque tincidunt ipsum non purus efficitur, id feugiat magna aliquet.",
    },
  ];

  return (
    <div className="container d-flex flex-column">
      <TopCard />
      <div className="container mt-4">
      {collapses.map((collapse) => (
        <React.Fragment key={collapse.title}>
        <Collapse title={collapse.title} paragraph={collapse.paragraph}/>
        </React.Fragment>
        ))}
        </div>
        <RefundForm/>
        </div>
  );
}
