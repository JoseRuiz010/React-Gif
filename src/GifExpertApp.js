import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";

export default function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <div>
      <h2>GifExpertApp</h2>
      <hr></hr>
      <AddCategory add={setCategories}></AddCategory>

      <ol>
        {categories.map((c, i) => (
          <GifGrid category={c} key={i}></GifGrid>
        ))}
      </ol>
    </div>
  );
}
