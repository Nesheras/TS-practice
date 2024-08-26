import { useParams } from "react-router-dom";
import { useGetProductsByIdQuery } from "../../../API/API";

export function Product() {
  const { id } = useParams();
  const { data, isLoading } = useGetProductsByIdQuery(id);
  if (isLoading) {
    return <div>Загрузка</div>;
  }
  return <p>Product {data.name}</p>;
}
