import { FaPlus } from "react-icons/fa";

type ProductProps = {
  productID: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const server = "https://www.myimaginestore.com"; // Replace with your actual server URL

const ProductCard = ({
  productID,
  price,
  name,
  photo,
  stock,
  handler,
}: ProductProps) => {
  return (
    <div className="pcard">
      <img src={`${server}/${photo}`} alt={name} className="product-image" />

      <p>{name}</p>
      <span>₹ {price}</span>

      <div>
        <button onClick={handler}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
