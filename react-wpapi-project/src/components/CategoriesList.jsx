import { useSelector , useDispatch } from "react-redux";
import { fetchPostCategories } from '../redux/slice/PostCategories';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import he from 'he';

export default function CategoriesList()  {

    const categoriesResponse = useSelector((state) => state.categories.categories);
    const loading = useSelector((state) => state.categories.loading);

    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    useEffect(() => {
        dispatch(fetchPostCategories())
    }, [])
    console.log(categoriesResponse); 

  return (
     <> 
     { loading ? (<div className="d-flex justify-content-center"> <Spinner animation="border" variant="danger" /> </div>) 
     : categoriesResponse && categoriesResponse.map((category) => (
        <ListGroup as="ol" key={category.id} className="mb-1">
        <ListGroup.Item onClick={() => navigate("/category/"+category.id)} as="li" className="d-flex justify-content-between align-items-start li-category">
            <div  className="ms-2 me-auto">
                <div className="fw-bold"> ~ {he.decode(category.name)}</div>
            </div>
            <Badge bg="primary" pill> {category.count} </Badge>
        </ListGroup.Item>
        </ListGroup>
     ))
    }
    </>
  );
}