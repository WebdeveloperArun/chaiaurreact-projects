import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import service from '../appwrite/post'
import { PostComponent } from '../components'

const Post = () => {
  const {slug} = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState();
  console.log(post);

  useEffect( () => {
     service.getPost(slug).then((post) => {
      if (post) {
        setPost(post)
      } else {
        navigate("/")
      }
     })
  },[slug, navigate])
  
  return (
    <div>
      <PostComponent post={post} />
    </div>
  );
}

export default Post
