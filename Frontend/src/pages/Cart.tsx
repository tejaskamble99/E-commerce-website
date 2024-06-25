import { useEffect, useState } from "react";
import { VscRunErrors } from "react-icons/vsc";
import CartItem from "../components/cart-item";

const cartItem = [
  {
    productId : "dsvfg",
    photo:"",
    name :"",
    price: 3000,
    quantity:5,
    stock:10,
  }
];
const subtotal = 4800;
const tax = Math.round(subtotal * 0.18);
const shipingCharges = 200;
const discount = 4000;
const total = subtotal + tax + shipingCharges - discount;
const Cart = () => {
  const [couponCode, setCouponCode] = useState("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);
   useEffect(() => {
    const timeOutID = setTimeout(()=>{
if (Math.random() > 0.5) setIsValidCouponCode(true);
else setIsValidCouponCode(false);
    },1000);
    return()=> {
      clearTimeout(timeOutID)
      setIsValidCouponCode(false);
    }
   }, [couponCode])
  return (
    <>
      <div className="cart">
        <main> 
          {cartItem.map((i , idx)=>(
          <CartItem key={idx}/>
          ))}
        </main>
          <aside>
            <p>Subtotal : ₹ {subtotal}</p>
            <p>Shiping Charges : ₹ {shipingCharges}</p>
            <p>Tax : ₹ {tax}</p>
            <p>
              Discount : <em> - ₹ {discount} </em>
            </p>
            <p>
              <b>Total: ₹ {total}</b>
            </p>

            <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
            {couponCode && (isValidCouponCode ? (
              <span className="green">
              
                ₹ {discount} off using the <code>{couponCode}</code>
              </span>
            ) : (
              <span className="red">Invalid Coupon  <VscRunErrors />

              </span>
            ))}
          </aside>
       
      </div>
    </>
  );
};

export default Cart;
