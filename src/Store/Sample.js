import React, { useEffect, useState } from "react";


export const Sample = () => {
    const [post, setPost] = useState([]);

    useEffect(()=>{
        
    const fetchData = async ()=>{
        try{
           const response= await fetch ('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPost(data);
        } catch(error){
            console.error(error);
        }  
    }
fetchData();
},[]);

return(
    <div>
        {post.map((item)=>(
            <li key={item.id}>
{item.title}
{item.body}
            </li>

        ))}
    </div>
)
}

