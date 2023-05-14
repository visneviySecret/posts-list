export const getPath = (location, postId) => {
    const result = []
    if (location.pathname.indexOf('/') !== -1) {
        result.push({ title: 'Posts', url: '/' })
    }
    if (location.pathname.indexOf('/post/') !== -1) {
        result.push({ title: postId, url: `/post/${postId}` })
    }
    return result
}
