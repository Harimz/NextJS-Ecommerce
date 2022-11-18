import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "../redux/services/productsApi";

export default function Home() {
  const { data: productData, isLoading: productsLoading } =
    useGetProductsQuery();
  const { data: categoryData, isLoading: categoriesLoading } =
    useGetCategoriesQuery();

  if (productsLoading || categoriesLoading) return "loading...";

  console.log(categoryData);

  return (
    <>
      <h1>Ecommerce Website</h1>
    </>
  );
}
