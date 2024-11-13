export interface User {
    id?: number
    username: string
    nombre: string
    apellido: string
    operativo: boolean
    activo: boolean
    email: string
    password?: string
    sucursal: string;
}