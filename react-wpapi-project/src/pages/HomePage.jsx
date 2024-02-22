import React from 'react'
import Article from '../components/Article'
import UsersSide from '../components/UsersSide'

export default function HomePage() {
  return (
      <>
        <div className='container row mx-auto justify-content-center'>
          <div className="col-lg-9 col-md-9 col-12 mx-auto">
            <div className='row mx-auto justify-content-center gap-5 my-4'>
              <Article />
            </div>
          </div>
          <UsersSide />
        </div>
      </>
    )
}
