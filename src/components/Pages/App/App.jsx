import { useState } from 'react'
import '../../../App.css'
import Posts from '../../Entities/Posts/Posts'
import SelectUser from '../../Entities/SelectUser/SelectUser'
import DefaultLayout from '../../Layout/Default'

function App() {
    const [user, setUser] = useState(null)

    return (
        <DefaultLayout>
            <SelectUser setUser={setUser} />
            <Posts user={user} />
        </DefaultLayout>
    )
}

export default App
