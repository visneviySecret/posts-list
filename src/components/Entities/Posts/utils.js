export const getQuery = (user) => {
    if (!user) return ''
    const id = user.value
    return `?userId=${id}`
}

export const getPostLink = (post) => {
    return `/post/${post.id}`
}

export const getPostsWithAuthors = (posts, authors) => {
    const result = posts.map((post) => {
        const author = authors.filter((author) => author.id === post.userId)
        const name = author[0].name
        return { ...post, name }
    })
    return result
}
