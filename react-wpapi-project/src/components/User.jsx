import React, { useState , useEffect } from 'react'
import { fetchUsers } from "../redux/slice/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

export default function User() {

    function random() {
        return Math.floor(Math.random() * 100) + 1;
    }
    function shuffleArray(array) {
        return array.sort(() => random() - 0.5);
    }

    const user = useSelector((state) => state.users.users);

    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div className='d-flex flex-wrap'>
            { user && user.map((user) => (
                <div className='w-100'>
                    <div key={user.id} className='d-flex justify-content-end my-2 me-2' style={{height: '1.3rem'}} >
                        <p className='pe-2'>{user.name}</p>
                        <img src={user.avatar_urls["24"]} className="rounded-circle" alt="..."></img>
                    </div>
                </div>
                ))
            }
        </div>
    )
}
