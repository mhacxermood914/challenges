/* eslint-disable linebreak-style */
export interface IRoles {
    label: string
    value: string
}

export interface ILogin {
    email: string
    password: string
}

export interface IRegister {
    firstname: string
    lastname: string
    email: string
    password: string
    role: string
    confirm_password?: string
    lang: string
}
