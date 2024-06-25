import React, { useEffect, useState } from 'react'
import service from '../appwrite/post'
import {Link} from 'react-router-dom'

const PostCard = ({$id, title, featuredImage}) => {
  const [url, setUrl] = useState("");
  
  useEffect(() => {
    service.getFilePreview(featuredImage).then((data) => {
      console.log(data);
      setUrl(data)
    })
  },[])

  return (
    <Link
      to={`/post/${$id}`}
      className="block bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div>
        <img src={url} alt="Image Error" className="w-full" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard
