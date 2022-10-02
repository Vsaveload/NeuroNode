import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardCategoriesPage from '../Cards/CardCategoriesPage';
import Navbar from '../Navbar/NavBar';

export default function LibraryPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios('http://localhost:3001/category/allwithproject')
      .then((res) => {
        setCategories(res.data);
      })
      .catch(console.log);
  }, []);

  return (
    <>
    <Navbar />
    <div className="d-flex" style={{ flexDirection: 'column' }}>
      {categories?.map((category) => (
        <CardCategoriesPage key={category.id} category={category} />))}
    </div>
    </>
  );
}
