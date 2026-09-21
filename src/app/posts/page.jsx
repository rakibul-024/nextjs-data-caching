import React from 'react';


/**
 * GET
 *  POST
 *  DPDATE - PUT PATCH 
 *  DELETE
  */ 

// SSG , SSR
const GetPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
};

const PostPage = async () => {

    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // const posts = await res.json();

    const posts = await GetPosts();
    console.log(posts);
    
    return (
        <div>
          <h2>Hello post:{posts.length} </h2>  
        </div>
    );
};

export default PostPage;