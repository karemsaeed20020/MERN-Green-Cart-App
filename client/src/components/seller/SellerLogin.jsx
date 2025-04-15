import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";

const SellerLogin = () => {
  const { isSeller, setIsSeller, navigate } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSeller(true);
  };

  useEffect(() => {
    if (isSeller) {
      navigate("/seller");
    }
  }, [isSeller]);

  return (
    !isSeller && (
      <div className="min-h-screen flex items-center justify-center text-sm text-gray-600">
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col gap-5 items-start p-8 py-12 w-full max-w-sm rounded-lg shadow-xl border border-gray-200 bg-white"
        >
          <p className="text-2xl font-medium w-full text-center mb-2">
            <span className="text-primary">Seller</span> Login
          </p>

          <div className="w-full">
            <label className="block mb-1">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
              className="border border-gray-200 rounded w-full p-2 outline-primary"
              required
            />
          </div>

          <div className="w-full">
            <label className="block mb-1">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter your password"
              className="border border-gray-200 rounded w-full p-2 outline-primary"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white w-full py-2 rounded-md hover:bg-opacity-90 transition"
          >
            Login
          </button>
        </form>
      </div>
    )
  );
};

export default SellerLogin;
