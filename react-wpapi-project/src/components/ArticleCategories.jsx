import React, { useState , useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import he from 'he';
import Spinner from 'react-bootstrap/Spinner';

export default function ArticleCategories({ articoli }) {

    //console.log(articoli);

    return (
        <>

            {articoli && articoli.map((post) => (
                <Card style={{ width: '23rem' }} key={post.id}>
                <Card.Img  className='h-50 w-100' variant="top" src={post.jetpack_featured_media_url} />
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">by {post.author}</Card.Subtitle>
                    <div style={{height: '11rem', flexDirection: 'column'}}>
                            {post.title ? <Card.Title>{he.decode(post.title.rendered)}</Card.Title> : <Card.Title>{post.slug}</Card.Title>}
                            {post.excerpt ? <Card.Subtitle dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.slice(3, -5) }} className="mb-2 text-muted"></Card.Subtitle> : "null"}
                        </div>
                        <Button 
                            onClick={() => navigate("/single-article/"+post.id)}
                            className='pb-1'
                            variant="secondary">
                                Continua a leggere...
                        </Button>
                </Card.Body>
            </Card>
            ))}
        </>
    )
}


