import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // active handler
  const [activeBtn, setActiveBtn] = useState("createBtn");

  return (
    <div className="py-5 mt-2" id="flash-creators-heading">
      {/* Heading of the App */}
      <h2 className="text-4xl font-bold mb-6 text-black">
        {" "}
        Flashcard Generator
      </h2>

      {/* Link for default Home page */}
      <Link
        to="/"
        onClick={() => setActiveBtn("createBtn")}
        className="relative px-4 py-3 mr-3 cursor-pointer text-gray-800 pb-3 font-medium"
      >
        Create New
        <span
          id="createBtn"
          style={
            activeBtn === "createBtn" ? { width: "100%" } : { width: "0%" }
          }
        ></span>
      </Link>

      {/* Navigation to view newly generated flashcards. */}
      <Link
        to="/myflashcards"
        onClick={() => setActiveBtn("flashBtn")}
        className="relative px-4 py-3 cursor-pointer text-gray-800 pb-3 font-medium"
      >
        My Flashcard
        <span
          id="flashGroup"
          style={activeBtn === "flashBtn" ? { width: "100%" } : { width: "0%" }}
        ></span>
      </Link>
      <hr className="bg-white" style={{ height: "2px", marginTop: "10px" }} />
    </div>
  );
};

export default Header;
