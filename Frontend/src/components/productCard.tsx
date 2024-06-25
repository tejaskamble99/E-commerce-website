 import { FaPlus } from "react-icons/fa";

type ProductProps = {
  productID: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const server = "any";

const productCard = ({
  productID,
  price,
  name,
  photo,
  stock,
  handler,
}: ProductProps) => {
  return (
    <div className="pcard">
      <img src={`${server} / ${photo}`} alt={name} />
      <p>{name}</p>
      <span>₹ {price}</span>

      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default productCard;
