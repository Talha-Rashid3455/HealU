
import React from "react";
import { FaStar } from "react-icons/fa";


function StarRating({ rating }) {
    return (
      <div className="flex space-x-1 ">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={index < rating ? "text-yellow-500 w-3 h-3" : "text-gray-300 w-3 h-3"}
          />
        ))}
      </div>
    );
  }



  export default StarRating;