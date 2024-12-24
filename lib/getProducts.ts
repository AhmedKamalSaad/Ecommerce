export interface Data {
  products: Result[];
}
export interface Result {
  id: number;
  title: string;
  price: string;
  thumbnail: string;
}
export const getProducts = async (order:string,category:string) => {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}?sortBy=price&order=${order}`
  );
  const data = (await res.json()) as Data;
  console.log(data);

  return data.products;
};
