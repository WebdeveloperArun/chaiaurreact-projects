import React from 'react'
import service from '../appwrite/post'
import {Link} from 'react-router-dom'

const PostCard = ({$id, title, featuredImage}) => {
  return (
    <Link to={`/post/${$id}`}>
        <div>
            <div>
                <img src={service.getFilePreview(featuredImage)} alt="Image Error" className='rounded-xl'/>
            </div>
            <h2 className='text-xl font-bold'>
                {title}
            </h2>
        </div>
    </Link>
  )
}

export default PostCard
