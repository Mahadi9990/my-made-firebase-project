import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { AllRoute } from './Routes/route'
import Loading from './components/Loading'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={AllRoute} fallBackElement={<Loading/>}/>
  </StrictMode>,
)
