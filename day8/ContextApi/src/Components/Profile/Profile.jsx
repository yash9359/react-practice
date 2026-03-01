import React,{useContext} from 'react'
import UserContext from '../../Context/UserContext';

function Profile() {

    const {user} = useContext(UserContext);

   if (!user) {
    return (
      <div className="bg-gray-700 text-white p-4 rounded-xl text-center">
        Please Login First 🔐
      </div>
    );
  }

  else{
    return(
        
    <div className="bg-green-500 text-white p-6 rounded-2xl shadow-lg text-center space-y-2">
      
      <h2 className="text-xl font-semibold">
        Welcome 🎉
      </h2>

      <p className="text-lg font-medium">
        {user.username}
      </p>

    </div>
    )
  }
}

export default Profile
