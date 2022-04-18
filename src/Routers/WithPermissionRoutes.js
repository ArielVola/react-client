import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomeScreen } from '../Screens/HomeScreen'

export const WithPermissionRoutes = () => {
  return (
    <>
        <div>
            <Routes>
                <Route path='home' element={ <HomeScreen />} />

                <Route path='/*' element={ <HomeScreen />} />
            </Routes>
        </div>
    </>
  )
}
