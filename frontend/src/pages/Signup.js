import {useState} from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(name,location, email, password)
    }
    
    return(
        <form className = "signup" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <label>Name</label>
            <input 
            type ="text"
            onChange={(e) => setName(e.target.value)}
            value = {name}
            />
            <label>Location</label>
            <input 
            type ="text"
            onChange={(e) => setLocation(e.target.value)}
            value = {location}
            />
            
            <label>Email</label>
            <input 
            type ="email"
            onChange={(e) => setEmail(e.target.value)}
            value = {email}
            />
    
            <label>Password</label>
            <input 
            type ="password"
            onChange={(e) => setPassword(e.target.value)}
            value = {password}
            />
    
            <button disabled={isLoading}>
                Signup
            </button>
            {error && <div className ="error">{error}</div>}
        </form>
    )
}

export default Signup