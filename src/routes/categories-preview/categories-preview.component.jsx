import { selectCategoriesMap } from "../store/categories/category.selector";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <>
      {Object.keys(categoriesMap)
        .sort((a, b) => (a.rank < b.rank ? 1 : -1))
        .map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })}
    </>
  );
};

export default CategoriesPreview;
