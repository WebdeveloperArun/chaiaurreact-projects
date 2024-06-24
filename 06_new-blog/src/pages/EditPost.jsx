import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { PostForm } from '../components';

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
