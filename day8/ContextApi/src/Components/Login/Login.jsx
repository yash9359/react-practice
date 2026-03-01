import React, {useState,useContext} from 'react'
import UserContext from '../../Context/UserContext'

function Login() {
    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const {setUser} =useContext(UserContext)

    const handleSubmit =(e) =>{

        e.preventDefault();
        setUser({username,password})

    }

  return (
    <div className="bg-white text-black shadow-xl rounded-2xl p-6 w-full">

      <h2 className="text-xl font-bold text-center mb-4">
        Login
      </h2>

      <div className="space-y-4">
        
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>

      </div>
    </div>
  )
}

export default Login
