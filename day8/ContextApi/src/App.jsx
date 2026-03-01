import './App.css'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
    
    <h1 className="text-3xl font-bold mb-8">
      React with Chai ☕
    </h1>

    <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6">
      <Login />
      <Profile />
    </div>

  </div>
</UserContextProvider>
  )
}

export default App
