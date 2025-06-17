export type User = {
    id: string,
    email: string,
    login: string
};

export type TUserContext = {
    user: User|null,
    isLoggedIn: boolean,
    login: (email: string, password: string) => void,
    register: (login: string, email: string, password: string) => void,
    logout: () => void
};

export type AuthFormErrors = {
    email?: string,
    password?: string,
    login?: string
};

export type AuthFormState = {
    errors?: AuthFormErrors
};