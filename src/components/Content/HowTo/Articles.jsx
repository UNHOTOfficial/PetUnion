import React from "react";

export default function Articles() {
  const articles = [
    {
      title: "how to make an order",
      paragraph:
        "a full guide how to make an order from scratch.useful if you have trouble making orders.",
      tag: "orders",
    },    {
        title: "how to make an order",
        paragraph:
          "a full guide how to make an order from scratch.useful if you have trouble making orders.",
        tag: "orders",
      },    {
        title: "how to make an order",
        paragraph:
          "a full guide how to make an order from scratch.useful if you have trouble making orders.",
        tag: "orders",
      },    {
        title: "how to make an order",
        paragraph:
          "a full guide how to make an order from scratch.useful if you have trouble making orders.",
        tag: "orders",
      },    {
        title: "how to make an order",
        paragraph:
          "a full guide how to make an order from scratch.useful if you have trouble making orders.",
        tag: "orders",
      },    {
        title: "how to make an order",
        paragraph:
          "a full guide how to make an order from scratch.useful if you have trouble making orders.",
        tag: "orders",
      },
  ];
  return (
    <div className="d-flex flex-column align-items-center mt-5">

   <h1>Articles</h1>
    <div className="row mt-3">
      {articles.map((article) => (
        <div key={article.title} className="col-6">
          <small className="fw-bold text-warning text-capitalize">
            {article.tag}
          </small>
          <h3 className="text-capitalize">{article.title}</h3>
          <p className="text-muted text-capitalize">{article.paragraph}</p>
        </div>
      ))}
    </div> </div>
  );
}
