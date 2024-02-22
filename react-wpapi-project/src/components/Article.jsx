import React, { useState , useEffect } from 'react'
import { fetchPosts } from "../redux/slice/PostSlice";
import { fetchPostCategories } from '../redux/slice/PostCategories';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import he from 'he';

export default function Article() {

    const postsResponse = useSelector((state) => state.posts.posts);
    const categoriesResponse = useSelector((state) => state.categories.categories);
    const [ categories, setCategories ] = useState({});
    
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchPosts())
        dispatch(fetchPostCategories())
    }, [])

    useEffect(() => {
        const categoriesMap = {};
        categoriesResponse.forEach(category => {
            categoriesMap[category.id] = category.name;
        });
        setCategories(categoriesMap);
    }, [categoriesResponse]);

    return (
        <>
            {postsResponse.length > 0 && postsResponse.map((post) => (
                <Card style={{ width: '23rem' }} key={post.id}>
                    <Card.Img  className='h-50 w-100' variant="top" src={post.jetpack_featured_media_url} />
                    <Card.Body>
                        {post.categories.map((category) => (
                                <Button 
                                    onClick={() => navigate("/category/"+category)} 
                                    dangerouslySetInnerHTML={{ __html: categories[category] }}
                                    key={category} 
                                    variant="secondary" 
                                    size="sm" 
                                    className='mb-3 me-3'>
                                </Button>
                            ))}
                        <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">by {post._embedded && post._embedded.author[0].name}</Card.Subtitle>
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
            ))
            }
        </>
    )
}


