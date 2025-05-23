import React, { useState } from 'react'
import { assets } from '../assets/assets'

// Input Field Component
const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    className='w-full px-3 py-2.5 border border-gray-300 rounded outline-none
      text-gray-700 focus:border-primary transition'
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    required
  />
);

const AddAddress = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // You can handle your API call here
    console.log("Submitted Address:", address);
  };

  return (
    <div className='mt-16 pb-16 px-4'>
      <p className='text-2xl md:text-3xl text-gray-700'>
        Add Shipping <span className='font-semibold text-primary'>Address</span>
      </p>

      <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
        <div className='flex-1 max-w-md'>
          <form onSubmit={onSubmitHandler} className='space-y-4 text-sm'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <InputField handleChange={handleChange} address={address} type="text" name="firstName" placeholder="First Name" />
              <InputField handleChange={handleChange} address={address} type="text" name="lastName" placeholder="Last Name" />
            </div>

            <InputField handleChange={handleChange} address={address} type="email" name="email" placeholder="Email Address" />
            <InputField handleChange={handleChange} address={address} type="text" name="street" placeholder="Street Address" />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <InputField handleChange={handleChange} address={address} type="text" name="city" placeholder="City" />
              <InputField handleChange={handleChange} address={address} type="text" name="state" placeholder="State" />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <InputField handleChange={handleChange} address={address} type="text" name="zipcode" placeholder="Zip Code" />
              <InputField handleChange={handleChange} address={address} type="text" name="country" placeholder="Country" />
            </div>

            <InputField handleChange={handleChange} address={address} type="text" name="phone" placeholder="Phone Number" />

            <button className='w-full mt-6 bg-primary text-white py-3 rounded hover:bg-primary-dull transition cursor-pointer uppercase'>
              Save Address
            </button>

          </form>
        </div>

        <img
          src={assets.add_address_iamge}
          alt="Add Address"
          className='md:mr-16 mb-12 md:mb-0 max-w-xs'
        />
      </div>
    </div>
  );
};

export default AddAddress;
