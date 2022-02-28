import React from "react";

function Details({ Heading, Image, Area, MealRes, setShowDetails }) {
  return (
    <>
      <div className="Back">
        <button
          onClick={() => {
            setShowDetails((prev) => !prev);
          }}
        >
          X
        </button>
      </div>
      <h1>{Heading}</h1>
      <img src={Image} alt="mealImage" width="150px" height="150px" />
      <div className="strAreaDetails">
        <h2>{Area}</h2>
      </div>
      <p>{MealRes}</p>
    </>
  );
}

export default Details;
