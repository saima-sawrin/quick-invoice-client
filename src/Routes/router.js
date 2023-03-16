import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Invoice from '../Components/Invoice/Invoice';
import Home from '../Layout/Home';
import Main from '../Layout/Main';
import About from '../Page/About/About';
import Login from '../Page/Login/Login';
import Suggestion from '../Page/Suggestion/Suggestion';
import Modal from '../Shared/Modal';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/suggestion',
                element: <Suggestion></Suggestion>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            
            {
                path: '/invoice',
                element: <Invoice></Invoice>
            },
            
            {
                path: '/modal',
                element: <Modal></Modal>
            },
            
        
          
        ]
    }

       
   
  
    

])

export default router;
