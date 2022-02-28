import React, { useEffect, useState } from "react";
import Box from "./Components/Box";
import "./App.css";
import Details from "./Components/Details";

function App() {
  const [search, setSearch] = useState("curry");
  const [mealData, setmealData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((data) => data.json())
      .then((Response) => {
        const data = Response.meals;
        setmealData(data);
      });
  }, [search]);

  // if (!mealData) {
  //   return <h1 style={{ color: "white" }}>Loadding.....</h1>;
  // }

  function handleDetails(Meals) {
    setMealDetails(Meals);
  }

  function shuffleItems() {
    mealData.sort(() => {
      return Math.random() - 0.5;
    });
    setmealData([...mealData]);
  }
  console.log(mealData);
  return (
    <div className="Main">
      <h2>Meal Finder</h2>
      <form style={{ margin: "20px" }} className="InputField">
        <input
          type="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            shuffleItems();
          }}
        >
          Shuffle
        </button>
      </form>

      {!showDetails ? (
        <div className="Container">
          {!mealData ? (
            <h2>Data Not Found</h2>
          ) : (
            mealData.slice(0, 5).map((mealD, index) => {
              return (
                <Box
                  key={`meal${index}`}
                  name={mealD}
                  handleDetails={handleDetails}
                  setShowDetails={setShowDetails}
                />
              );
            })
          )}
        </div>
      ) : (
        <div className="Details">
          <Details
            Heading={mealDetails.strMeal}
            Image={mealDetails.strMealThumb}
            Area={mealDetails.strArea}
            MealRes={mealDetails.strInstructions}
            setShowDetails={setShowDetails}
          />
        </div>
      )}
    </div>
  );
}

export default App;
