import { createContext, useState, useEffect } from "react";

import {
  getCategoriesAndDocuments,
  addCollectionAndDocuments,
} from "../Utils/firebase/firebase.utils.js";

import SHOP_DATA from "../shop-data.js";

export const CatagoriesContext = createContext({
  categoriesMap: {},
});

export const CatagoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
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
