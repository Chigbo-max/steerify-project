import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from "./router/routes.jsx"
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function App() {

  return (
    <GoogleOAuthProvider clientId={clientId}>
    <div className="bg-white">
      
      <RouterProvider router = {router}
       future={{
        v7_startTransition: true,
      }}/>
      </div>
      </GoogleOAuthProvider>
     
   
    
    
  )
}

export default App
