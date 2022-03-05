import React from "react";

function Details({ Heading, Image, Area, MealRes, setShowDetails, Ingrad }) {
  const inrads = [];
  let ind = 0;
  for (let i = 1; i <= 20; i++) {
    const name = "strIngredient" + i;
    if (Ingrad[name] !== "" && Ingrad[name] !== null) {
      inrads[ind] = Ingrad[name];
      ind++;
    }
  }
  console.log(inrads);
  return (
    <div className="Details">
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
        <p>{Ingrad.strCategory}</p>
      </div>
      <p>{MealRes}</p>
      <div className="Ingradients">
        <h3>Ingradients</h3>
        <div className="listsIn">
          {inrads.map((data) => {
            return <div>{data}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Details;
