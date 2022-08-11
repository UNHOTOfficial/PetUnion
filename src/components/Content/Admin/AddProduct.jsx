import React from "react";
import axios from "axios";

export default function AddProduct() {
  const sendToDB = () => {
    const json = JSON.stringify({
      image: document.getElementById("image").value,
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      price: document.getElementById("price").value,
      hasDiscount: Boolean(document.getElementById("hasDiscount").value),
      discount: document.getElementById("discount").value,
      category: document.getElementById("category").value,
      rating: {
        rate: document.getElementById("rate").value,
        count: document.getElementById("count").value,
      },
    });

    axios
      .post("http://localhost:3001/api/products", json, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        const resMessage = res.data.message;
        printResponse(resMessage);
      })
      .catch((err) => {
        console.log(err);
      });

      const printResponse = (ResponseMessage) => {
        const response = document.querySelector(".response");
        response.classList.remove("d-none");
        response.textContent = ResponseMessage;

      };
  };
  return (
    <div
      className="bg-light text-dark ms-auto p-4 rounded-3 border d-flex flex-column justify-content-evenly col-9"
      style={{ height: "40rem" }}
    >
      <h3 className="response d-none">{}</h3>
      <div className="d-flex flex-column border rounded-3 p-2 justify-content-evenly" style={{height:"30rem"}}>
        <h5 className="text-center mb-2">Product Specifications</h5>
        <div className="d-flex align-items-center">
          <label className="form-label">Image:</label>
          <input
            id="image"
            className="form-control w-75 ms-auto me-3"
            placeholder="image"
          ></input>
        </div>
        <div className="d-flex align-items-center">
          <label className="form-label">Title:</label>
          <input
            id="title"
            className="form-control w-75 ms-auto me-3"
            placeholder="title"
          ></input>
        </div>
        <div className="d-flex align-items-center">
          <label className="form-label">Description:</label>
          <textarea
            style={{ resize: "none" }}
            id="description"
            className="form-control w-75 ms-auto me-3"
            placeholder="description"
          ></textarea>
        </div>
        <div className="d-flex align-items-center">
          <label className="form-label">Price:</label>
          <input
            id="price"
            className="form-control w-75 ms-auto me-3"
            placeholder="price"
          ></input>
        </div>
        <div className="d-flex align-items-center">
          <label className="form-label">Has Discount:</label>
          <input
            id="hasDiscount"
            className="form-control w-75 ms-auto me-3"
            placeholder="hasDiscount"
          ></input>
        </div>
        <div className="d-flex align-items-center">
          <label className="form-label">Discount:</label>
          <input
            id="discount"
            className="form-control w-75 ms-auto me-3"
            placeholder="discount"
          ></input>
        </div>
        <div className="d-flex align-items-center">
          <label className="form-label">Category:</label>
          <input
            id="category"
            className="form-control w-75 ms-auto me-3"
            placeholder="Category"
          ></input>
        </div>
      </div>
      <div className="border rounded-3 d-flex p-2 mt-2 d-flex flex-column">
        <h5 className="text-center mb-2">Rating</h5>
        <div className="d-flex align-items-center justify-content-evenly">
          <label className="form-label">Rate:</label>
          <input
            id="rate"
            className="form-control w-25"
            placeholder="rate"
          ></input>

          <label className="form-label">Count:</label>
          <input
            id="count"
            className="form-control w-25"
            placeholder="count"
          ></input>
        </div>
      </div>
      <button onClick={sendToDB} className="btn btn-warning mx-auto mt-2 w-25">
        Submit
      </button>
    </div>
  );
}
