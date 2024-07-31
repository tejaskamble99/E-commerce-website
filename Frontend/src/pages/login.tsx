import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [gender, setgender] = useState("");
  const [date, setDate] = useState("");
  return (
    <div className="login">
      <main className="">
        <h1 className="heading">Login</h1>
        <div>Gender</div>
        <select
          value={gender}
          onChange={(e) => setgender(e.target.value)}
        >
<option value=''>Select Gender</option>
<option value='male'>Male</option>
<option value='female'>Female</option>

        </select>
        <div>
          <label>
            Gender
          </label>
          <input value={date}
          onChange={(e) => setDate(e.target.value)} />
          </div>

          <div>
            <p>Accout is already Signed In </p>
            <button><FcGoogle /></button> <span> Singed with Google</span>
          </div>
      </main>
    </div>
  );
};

export default Login;
