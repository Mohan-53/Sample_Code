import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, removeCard, setCurrentPage, toggleCardDesign } from "./Auction";
import "../App.css";


export const Posts = () => {
    const dispatch = useDispatch();
    const { posts, loading} = useSelector((state) => state.posts);
    const [currentPagePost , setCurrentPagePost] = useState([]);
    const cardsPerPage = 6;
    const [currentPage , setCurrentPage]= useState(1);

    console.log(posts)
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(fetchPosts());
        }, 5000);

        return () => {
            clearTimeout(timer);
        }
    }, [dispatch]);

    useEffect(()=>{
        const indexOfLastCard = currentPage * cardsPerPage;
        const indexOfFirstCard = indexOfLastCard - cardsPerPage;
        const currentPost = posts.slice(indexOfFirstCard,indexOfLastCard);
        setCurrentPagePost(currentPost);
    },[currentPage, posts]);


    const handlePageChange = (page)=>{
setCurrentPage(page);
    }

    const handleRemoveCard = (id) => {
        dispatch(removeCard(id));
    }

    const handleViewToggle = () => {
        dispatch(toggleCardDesign());
    }

    return (
        <div>
            <button onClick={handleViewToggle}>Toggle View</button>
            <div className="container">
            {currentPagePost.map((post) => (
                <div key={post.id} className="card-design">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button onClick={() => handleRemoveCard(post.id)}>Remove</button>
                </div>
            ))
            }
            </div>
        </div>
    );

}