import React from 'react'
import { useParams } from 'react-router-dom'
import Author from '../../Entities/Author/Author'
import PostCard from '../../Entities/PostCard/PostCard'
import Comments from '../../Entities/Comments/Comments'
import BackButton from '../../Shared/BackButton/BackButton'
import DefaultLayout from '../../Layout/Default'

function PostPage() {
    const { postId } = useParams()

    return (
        <DefaultLayout>
            <BackButton />
            <PostCard postId={postId} />
            <Author postId={postId} />
            <Comments postId={postId} />
        </DefaultLayout>
    )
}

export default PostPage
