import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { WithOutPermissionRoutes } from './WithOutPermissionRoutes'
import { WithPermissionRoutes } from './WithPermissionRoutes'

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <AnimatePresence>
                <Routes>

                    <Route path='/auth/*' element={
                        <PublicRoute>
                            <WithOutPermissionRoutes />
                        </PublicRoute>
                    } />

                    <Route
                        path='/*' element={
                            <PrivateRoute>
                                <WithPermissionRoutes />
                            </PrivateRoute>}
                    />
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    )
}
