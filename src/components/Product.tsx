import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);
  const btnBgClassName = details ? "bg-blue-400" : "bg-yellow-400";
  const btnClasses = ["py-2 px-4 border ", btnBgClassName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} alt={product.title} className="w-1/6" />
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      {product.rating && (
        <p>
          Rate:{" "}
          <span style={{ fontWeight: "bold", color: "#ccc" }}>
            {product?.rating?.rate}
          </span>
        </p>
      )}
      <button
        className={btnClasses.join(" ")}
        onClick={() => {
          setDetails((prev) => !prev);
        }}
      >
        {details ? "Hide details" : "Show detail"}
      </button>
      {details && (
        <div>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
}
