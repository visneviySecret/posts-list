import React from 'react'
import {
    Button,
    Container,
    FormControl,
    FormHelperText,
    Input,
    Paper,
    Typography,
} from '@mui/material'
import useCreateComment from './useCreateComment'

function CreateComment({ setComments }) {
    const { handleForm, submitForm, errors, form } =
        useCreateComment(setComments)

    return (
        <Paper
            elevation={3}
            sx={{
                maxWidth: '500px',
                marginInline: 'auto',
                mb: '10px',
                paddingBlock: '10px',
            }}
        >
            <Typography>Add new comment:</Typography>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginBlock: '10px',
                }}
            >
                <FormControl sx={{ mb: 1.5 }}>
                    <Input
                        placeholder={'Input your name'}
                        size="small"
                        name="name"
                        onChange={handleForm}
                        error={!!errors.name}
                        value={form.name}
                    ></Input>
                    <FormHelperText sx={{ color: '#d32f2f' }}>
                        {errors.name}
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <Input
                        multiline
                        maxRows={4}
                        placeholder="Write a comment"
                        name="body"
                        onChange={handleForm}
                        error={!!errors.body}
                        value={form.body}
                    ></Input>
                    <FormHelperText sx={{ color: '#d32f2f' }}>
                        {errors.body}
                    </FormHelperText>
                </FormControl>
            </Container>
            <Button variant="outlined" onClick={submitForm}>
                Send
            </Button>
        </Paper>
    )
}

export default CreateComment
