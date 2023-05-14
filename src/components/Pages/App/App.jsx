import { useState } from 'react'
import '../../../App.css'
import Posts from '../../Entities/Posts/Posts'
import SelectComponent from '../../Entities/SelectUser/SelectUser'

function App() {
    const [user, setUser] = useState(null)

    return (
        <>
            <SelectComponent setUser={setUser} />
            <Posts user={user} />
        </>
    )
}

export default App
