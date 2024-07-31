import React, { useEffect, useState } from 'react';
import './Add.css';
import axios from 'axios';

const Add = () => {
  const [data, setData] = useState({
    images: [],
    title: '',
    price: '',
    description: '',
    category: 'Body Care',
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeImage = (e) => {
    const tempImage = e.target.value;
    const name = e.target.name;
    setData((prev) => ({ ...prev, [name]: tempImage }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const imageData = data.images.split(',');
    const response = await axios.post('http://localhost:4000/api/item/add', {
      ...data,
      images: imageData,
    });
    try {
      if (response.data.success) {
        console.log('Product added');
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className='add'>
      <form onSubmit={submitHandler} className='add-form'>
        <div className='upload-image'>
          <p>Upload Image</p>
          <input onChange={onChangeImage} type='text' name='images' required />
        </div>
        <div className='title'>
          <p>Title</p>
          <input onChange={onChangeHandler} type='text' name='title' required />
        </div>
        <div className='price'>
          <p>Price</p>
          <input onChange={onChangeHandler} type='number' name='price' />
        </div>
        <div className='description'>
          <p>Description</p>
          <input onChange={onChangeHandler} type='text' name='description' />
        </div>
        <div className='category'>
          <p>Product Category</p>
          <select onChange={onChangeHandler} name='category'>
            <option value='Body Care'>Body Care</option>
            <option value="I'm not sure">I'm not sure</option>
            <option value='Oily skin'>Oily skin</option>
            <option value='Brightness'>Brightness</option>
            <option value='Dry Skin'>Dry Skin</option>
            <option value='Anti aging'>Anti aging</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Add;
