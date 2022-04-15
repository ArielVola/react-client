import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../Screens/LoginScreen'
import { RegisterScreen } from '../Screens/RegisterScreen'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route
                path='/login'
                element={<LoginScreen />}
            />

            <Route
                path='/register'
                element={<RegisterScreen />}
            />

            <Route
                path='/*'
                element={<LoginScreen />}
            />
        </Routes>
    </BrowserRouter>
  )
}
