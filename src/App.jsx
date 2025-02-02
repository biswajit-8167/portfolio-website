 import React from 'react'
 import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navber from './Components/Navber'
import Home from './Main/Home'
 function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: 
        <div>
          <Navber/>
          <Home/>
        </div>
    }
  ])
   return (
     <div>
       <RouterProvider router={router}/>
     </div>
   )
 }
 
 export default App