import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
    {
        key: 'admin.personal',
        path: '/admin/personal',
        component: lazy(() => import('@/views/personal/Personal')),
        authority: [],
    },
    {
        key: 'admin.sucursales',
        path: '/admin/sucursales',
        component: lazy(() => import('@/views/sucursales/Sucursales')),
        authority: [],
    },
    {
        key: 'admin.proveedores',
        path: '/admin/proveedores',
        component: lazy(() => import('@/views/proveedores/Proveedores')),
        authority: [],
    },
    {
        key: 'admin.cheques',
        path: '/admin/cheques',
        component: lazy(() => import('@/views/cheques/Cheques')),
        authority: [],
    },
    {
        key: 'admin.doctores',
        path: '/admin/doctores',
        component: lazy(() => import('@/views/doctores/Doctores')),
        authority: [],
    },
]
