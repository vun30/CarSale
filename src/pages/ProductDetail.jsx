import { useParams } from "react-router-dom";
import Breadcrumb from "../components/layout/Breadcrumb";

export default function ProductDetail() {
  const { category, slug } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Breadcrumb />
      <h1 className="text-2xl font-bold mb-4 capitalize">{slug}</h1>
      <p>Chi tiết sản phẩm thuộc loại {category}.</p>
    </div>
  );
}
