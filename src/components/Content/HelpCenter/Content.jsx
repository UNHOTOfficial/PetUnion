import React from "react";

export default function Content() {
  const contentCards = [
    {
      icon: "bi bi-play-circle",
      title: "Getting Started",
      paragraph: "Brief Articles About Getting Started Using PetUnion.",
    },
    {
      icon: "bi bi-person",
      title: "Account",
      paragraph: "Brief Articles About Getting Started Using PetUnion.",
    },
    {
      icon: "bi bi-box-seam",
      title: "Orders",
      paragraph: "Brief Articles About Getting Started Using PetUnion.",
    },
    {
      icon: "bi bi-play-circle",
      title: "Payment",
      paragraph: "Brief Articles About Getting Started Using PetUnion.",
    },
    {
      icon: "bi bi-play-circle",
      title: "Features",
      paragraph: "Brief Articles About Getting Started Using PetUnion.",
    },
    {
      icon: "bi bi-play-circle",
      title: "Changelog",
      paragraph: "Brief Articles About Getting Started Using PetUnion.",
    },
  ];
  return (
    <div className="row justify-content-center mt-5">
        {contentCards.map((contentCard)=>(
      <div key={contentCard.title} className="col-3 m-2 p-4 border rounded-2 text-dark d-flex flex-column align-items-center justify-content-evenly" style={{height:"15rem"}}>
        <i className={`${contentCard.icon} bg-light p-2 rounded-2 m-0`}></i>
        <strong>{contentCard.title}</strong>
        <p className="text-muted w-75">{contentCard.paragraph}</p>
        <button className="btn border-0 rounded-2 btn-light w-100">Learn More</button>
      </div>
        ))}
    </div>
  );
}
