import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams , useNavigate } from 'react-router-dom';
import { urlRollingStone } from '../config';
import { fetchPostCategories } from '../redux/slice/PostCategories';
import ArticleCategories from '../components/ArticleCategories';
import UsersSide from '../components/UsersSide'

export default function Category() {

  const [categoria, setCategoria] = useState([]);
  /* "https://www.rollingstone.com/wp-json/wp/v2/posts?categories=32" */

  let params = useParams();
  //console.log(params);

  useEffect(() => {
    axios.get(urlRollingStone + "posts?categories=" + params.id + "&per_page=20")
      .then(response => {
        setCategoria(response.data);
        //console.log(categoria);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

    //console.log(categoria);

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const categoriesResponse = useSelector((state) => state.categories.categories);
    useEffect(() => {
        dispatch(fetchPostCategories())
    }, [])
    //console.log(categoriesResponse);

  return (
    <>
      {categoriesResponse.map(category => {
        if (category.id == params.id) {
          return <h1 key={category.id} className='text-center'> {category.name} </h1>
        }
      })}
      <div className='container row mx-auto justify-content-center'>
        <div className="bg-info col-lg-9 col-md-9 col-12 mx-auto">
          <div className='row mx-auto justify-content-center gap-5 my-4'>
            <ArticleCategories articoli={categoria} />
          </div>
        </div>
        <UsersSide />
      </div>
    </>
  )
}
