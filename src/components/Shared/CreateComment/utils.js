import { getAuthors } from '../../Entities/Author/api'

export const getAuthorId = async (form) => {
    const authors = await getAuthors()
    const authorId =
        (await authors.filter(
            (author) =>
                author.name === form.name || author.username === form.name
        )[0]?.id) || Date.now()
    return authorId
}

export const inital_form_value = { name: '', body: '', id: '' }
