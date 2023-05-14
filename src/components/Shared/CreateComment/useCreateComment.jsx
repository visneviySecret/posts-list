import { useState } from 'react'

function useCreateComment() {
    const [form, setForm] = useState({ name: '', comment: '', userId: '' })
    const [errors, setErrors] = useState({ name: '', comment: '' })

    const handleForm = (event) => {
        const key = event.target.name
        const value = event.target.value
        setForm((prev) => ({ ...prev, [key]: value }))
        setErrors((prev) => ({ ...prev, [key]: '' }))
    }

    const submitForm = async () => {
        if (checkErrors()) return
        const authorId = await getAuthorId(form)
        setForm((prev) => ({ ...prev, userId: authorId }))
        postComment(form)
    }

    const setEmptyField = (key) => {
        setErrors((prev) => ({
            ...prev,
            [key]: 'This field can not be empty',
        }))
    }
    const checkErrors = () => {
        let isError = false
        if (form.name === '') {
            setEmptyField('name')
            isError = true
        }
        if (form.comment === '') {
            setEmptyField('comment')
            isError = true
        }
        return isError
    }
    return { handleForm, submitForm, errors }
}

export default useCreateComment
