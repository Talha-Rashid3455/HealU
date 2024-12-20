import React, { useState } from "react";
import Header2 from "../components/Header2";
import axios from "axios";

const Chatbot = () => {
  const [inputParagraph, setInputParagraph] = useState(""); // State for user input
  const [result, setResult] = useState(""); // State for processed result

  // Function to process the paragraph
  const handleProcess = () => {
    // Example processing: Convert the paragraph to uppercase
    console.log(inputParagraph)
    axios
      .get("http://localhost:8000/chatbot",{
        params:{chat:inputParagraph}
      }) // Replace with your FastAPI URL
      .then((response) => {
        setResult(response.data.result); // Access the "message" field
        console.log(response.data)
      })
      .catch((err) => {
        console.log(response.data.message)
        setError(err.message);
      });
  };

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className=" justify-start">
      <Header2  />

        {/* Textarea for Input */}
        <h1 className="text-fuchsia-800 text-3xl border-b-2 border-black">Enter  the symptoms of your disease</h1>
        <h1 className="text-fuchsia-800 text-3xl border-b-2 border-black ml-2 ">We will recommend you a doctor</h1>
        <textarea
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          placeholder="Enter your symptoms here..."
          value={inputParagraph}
          onChange={(e) => setInputParagraph(e.target.value)}
          rows={6}
        ></textarea>

        {/* Process Button */}
        <div className="text-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            onClick={handleProcess}
          >
            Recommend
          </button>
        </div>

        {/* Display Result */}
        {result && (
          <div className="mt-6 p-4 bg-gray-50 border-t border-gray-300 rounded">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Processed Result:
            </h2>
            <p className="text-gray-700">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
