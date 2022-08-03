import React from "react";

export default function TopArticles() {
  const topArticles = [
    {
      category: "Account",
      title: "Make Account Secure",
      paragraph:
        "there are some ways you can make your petUnion account secure. learn them here and use them in order to increase your account security and prevent your account from unauthorized permissions.",
    },
    {
      category: "Account",
      title: "Make Account Secure",
      paragraph:
        "there are some ways you can make your petUnion account secure. learn them here and use them in order to increase your account security and prevent your account from unauthorized permissions.",
    },
    {
      category: "Account",
      title: "Make Account Secure",
      paragraph:
        "there are some ways you can make your petUnion account secure. learn them here and use them in order to increase your account security and prevent your account from unauthorized permissions.",
    },
    {
      category: "Account",
      title: "Make Account Secure",
      paragraph:
        "there are some ways you can make your petUnion account secure. learn them here and use them in order to increase your account security and prevent your account from unauthorized permissions.",
    },
    {
      category: "Account",
      title: "Make Account Secure",
      paragraph:
        "there are some ways you can make your petUnion account secure. learn them here and use them in order to increase your account security and prevent your account from unauthorized permissions.",
    },
    {
      category: "Account",
      title: "Make Account Secure",
      paragraph:
        "there are some ways you can make your petUnion account secure. learn them here and use them in order to increase your account security and prevent your account from unauthorized permissions.",
    },
  ];
  return (
    <div className="d-flex flex-column">
      <h1>Top Articles</h1>
      <div className="row align-items-center">
        {topArticles.map((topArticle) => (
          <div key={topArticle.title} className="col-6 text-dark">
            <p className="fw-bold text-warning m-0">{topArticle.category}</p>
            <h3 className="text-capitalize">{topArticle.title}</h3>
            <p className="text-muted text-capitalize">{topArticle.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
