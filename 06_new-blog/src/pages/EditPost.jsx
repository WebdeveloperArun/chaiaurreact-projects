import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { PostForm } from '../components';
import service from '../appwrite/post';


const EditPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState();

    useEffect(() => {
      service.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    }, [slug, navigate]);

  return (
    <div>
      <PostForm post={post} />
    </div>
  )
}

export default EditPost
