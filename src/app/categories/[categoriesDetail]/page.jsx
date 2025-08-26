import React from "react";

function CategoriesDetail({ params }) {
  const { categoriesDetail } = params;

  console.log(categoriesDetail,"UUUU");
  

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Kategoriya ID: {categoriesDetail}</h1>
    </div>
  );
}

export default CategoriesDetail;
