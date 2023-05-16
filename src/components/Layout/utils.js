import { baseUrl } from '../../router'

export const getPath = (location, postId) => {
    const result = []
    if (location.pathname.indexOf(baseUrl) !== -1) {
        result.push({ title: 'Posts', url: baseUrl })
    }
    if (location.pathname.indexOf('/post/') !== -1) {
        result.push({ title: postId, url: `/post/${postId}` })
    }
    return result
}
