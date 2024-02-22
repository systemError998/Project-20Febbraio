import React from 'react'
import Container from 'react-bootstrap/Container';
import CategoriesList from '../components/CategoriesList' 

export default function CategoriesPage() {
  return (
    <Container className='my-5'>
      <h1> Categories: </h1>
      <CategoriesList />
    </Container>
  )
}
