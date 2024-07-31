import { useState, ChangeEvent } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Navigate, useNavigate } from "react-router-dom";

const Shipping = () => {


    const navigate =useNavigate()
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div className="shipping">
      <button className="back-btn" onClick={()=> navigate("/cart")}>
        <BiArrowBack />
      </button>
      <form>
        <h1>Shipping Info</h1>
        <input
          required
          type="text"
          placeholder="Address"
          name="address"
          value={shippingInfo.address}
          onChange={changeHandler}
        />
        <input
          required
          type="text"
          placeholder="City"
          name="city"
          value={shippingInfo.city}
          onChange={changeHandler}
        />
        <input
          required
          type="text"
          placeholder="State"
          name="state"
          value={shippingInfo.state}
          onChange={changeHandler}
        />
        <select
          required
          name="country"
          value={shippingInfo.country}
          onChange={changeHandler}
        >
          <option value="">Choose Country</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
        </select>
        <input
          required
          type="text"
          placeholder="Pincode"
          name="pincode"
          value={shippingInfo.pincode}
          onChange={changeHandler}
        />
         <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Shipping;
