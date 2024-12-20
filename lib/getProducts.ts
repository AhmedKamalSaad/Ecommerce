export interface Data {
    products: Result[];
  }
  export interface Result {
    id: number;
    title: string;
    price: string;
    thumbnail:string
  
  }
  export const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products/category/smartphones");
  const data = await (res.json()) as Data
  console.log(data);

  return data.products;
};
