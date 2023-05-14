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

function CreateComment() {
    const { handleForm, submitForm, errors } = useCreateComment()

    return (
        <Paper elevation={3} sx={{ mb: '10px', paddingBlock: '10px' }}>
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
                        placeholder="Input your name"
                        size="small"
                        name="name"
                        onChange={handleForm}
                        error={!!errors.name}
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
                        name="comment"
                        onChange={handleForm}
                        error={!!errors.comment}
                    ></Input>
                    <FormHelperText sx={{ color: '#d32f2f' }}>
                        {errors.comment}
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
