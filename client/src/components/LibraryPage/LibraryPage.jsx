import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardCategoriesPage from '../Cards/CardCategoriesPage';
import Navbar from '../Navbar/NavBar';
import './LibraryPage.css';

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
      <Navbar className="navbar border" />

      <div className="library">
        <div className="d-flex">
          {categories?.map((category) => (
            <CardCategoriesPage key={category.id} category={category} />))}
        </div>
      </div>
    </>
  );
}
