import { useEffect, useState } from 'react'
import Select from 'react-select'
import { getUsers } from './api'
import { getOptionsFromUserArray } from './utils'
import { useAlert } from 'react-alert'
import { Skeleton } from '@mui/material'

function SelectUser({ setUser }) {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const alert = useAlert()

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        try {
            setIsLoading(true)
            const fetchedUsers = await getUsers('')
            const formattedUsers = getOptionsFromUserArray(fetchedUsers)
            setUsers(formattedUsers)
            setIsLoading(false)
        } catch {
            throw new Error('Can not get users respones from server')
        }
    }

    const handleSelect = (user) => {
        alert.info(`Select user: ${user.label}`)
        setUser(user)
    }

    if (isLoading) {
        return (
            <Skeleton
                variant="rectangular"
                width="700px"
                height={30}
                sx={{ mb: '20px' }}
            ></Skeleton>
        )
    }

    return (
        <div
            style={{
                maxWidth: '700px',
                marginInline: 'auto',
                marginBottom: '20px',
            }}
        >
            <Select
                options={users}
                onChange={handleSelect}
                placeholder="Select user"
            />
        </div>
    )
}

export default SelectUser
