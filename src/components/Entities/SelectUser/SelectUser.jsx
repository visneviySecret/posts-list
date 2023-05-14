import { useEffect, useState } from 'react'
import Select from 'react-select'
import { getUsers } from './api'
import { getOptionsFromUserArray } from './utils'
import { useAlert } from 'react-alert'

function SelectUser({ setUser }) {
    const [users, setUsers] = useState([])
    const alert = useAlert()

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        try {
            const fetchedUsers = await getUsers('')
            const formattedUsers = getOptionsFromUserArray(fetchedUsers)
            setUsers(formattedUsers)
        } catch {
            throw new Error('Can not get users respones from server')
        }
    }

    const handleSelect = (user) => {
        alert.info(`Select user: ${user.label}`)
        setUser(user)
    }

    return (
        <div>
            <Select
                options={users}
                onChange={handleSelect}
                placeholder="Select user"
            />
        </div>
    )
}

export default SelectUser
