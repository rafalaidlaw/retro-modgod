import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../Utils/firebase/firebase.utils.js";

export const CatagoriesContext = createContext({
  categoriesMap: {},
});

export const CatagoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CatagoriesContext.Provider value={value}>
      {children}
    </CatagoriesContext.Provider>
  );
};
