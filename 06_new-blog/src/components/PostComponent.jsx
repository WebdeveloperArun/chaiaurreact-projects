import React, {useEffect, useState} from 'react'
import service from '../appwrite/post';
import { useNavigate, useParams } from 'react-router-dom';
import {Container} from "./index"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {Button} from "./index"
import parse from "html-react-parser"; 



const PostComponent = ({post}) => {
  const navigate = useNavigate()
  const [url, setUrl] = useState("");
  console.log(post);

  useEffect(() => {
    service.getFilePreview(post?.featuredImage || undefined).then((data) => {
      console.log(data);
      setUrl(data);
    });
  }, [post]);

  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  const deletePost = async () => {
    const res = await service.deletePost(post.$id)
    if (res) {
      service.deleteFile(post.featuredImage);
      navigate("/");
    }
  }
   return post ? (
     <div className="py-8">
       <Container>
         <div className="w-full flex flex-col items-center mb-4 relative border border-gray-700 rounded-xl p-2 bg-gray-800">
           <div className='w-2/4'>
             <img
               src={url}
               alt={post.title}
               className="rounded-xl w-full object-cover"
             />
           </div>

           {isAuthor && (
             <div className="absolute right-6 top-6 flex space-x-3">
               <Link to={`/edit-post/${post.$id}`}>
                 <Button bgColor="bg-green-500" className="mr-3">
                   Edit
                 </Button>
               </Link>
               <Button bgColor="bg-red-500" onClick={deletePost}>
                 Delete
               </Button>
             </div>
           )}
         </div>
         <div className="w-full mb-6">
           <h1 className="text-2xl font-bold text-black">{post.title}</h1>
         </div>
         <div className="browser-css text-black">{parse(post.content)}</div>
       </Container>
     </div>
   ) : null;
}

export default PostComponent;
