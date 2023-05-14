import { useState } from 'react'
import { getAuthorId, inital_form_value } from './utils'
import { postComment } from './api'
import { useAlert } from 'react-alert'

function useCreateComment(setComments) {
    const [form, setForm] = useState(inital_form_value)
    const [errors, setErrors] = useState({ name: '', body: '' })
    const alert = useAlert()

    const handleForm = (event) => {
        const key = event.target.name
        const value = event.target.value
        setForm((prev) => ({ ...prev, [key]: value }))
        setErrors((prev) => ({ ...prev, [key]: '' }))
    }

    const submitForm = async () => {
        if (checkErrors()) return
        const authorId = await getAuthorId(form)
        setForm((prev) => ({ ...prev, id: authorId }))
        await fetchPostComment(form)
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
        if (form.body === '') {
            setEmptyField('body')
            isError = true
        }
        return isError
    }

    const fetchPostComment = async (form) => {
        try {
            await postComment(form)
            alert.success('Your comment was successfuly posted!')
            setComments((prev) => [form, ...prev])
            setForm(inital_form_value)
        } catch (err) {
            const error_message = 'Server Error, ' + err
            alert.error(error_message)
            throw new Error(error_message)
        }
    }

    return { form, handleForm, submitForm, errors }
}

export default useCreateComment
