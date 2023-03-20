import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom' 
import { SidebarArrayMenu } from '../Layout/SidebarArray';
export const MyRoutes = () => {
  return (
    <div className='bodycontainer'> 
    <Routes>
        {
            SidebarArrayMenu.map(({path, Component})=> <Route key={path} path={path} element={<Component />} />)
        }

        
         <Route path="/*" element={<Navigate to={'/'}  />} />
      </Routes>
      </div>
  )
}
 