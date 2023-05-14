import React from 'react'
import { useParams } from 'react-router-dom'
import Author from '../../Entities/Author/Author'
import PostCard from '../../Entities/PostCard/PostCard'
import Comments from '../../Entities/Comments/Comments'

function PostPage() {
    const { postId } = useParams()

    return (
        <div>
            <PostCard postId={postId} />
            <Author postId={postId} />
            <Comments postId={postId} />
        </div>
    )
}

export default PostPage
