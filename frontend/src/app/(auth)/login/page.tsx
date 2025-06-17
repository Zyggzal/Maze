import AuthFormsContainer from "./authFormsContainer";

export default function LoginPage() {
    return <div className="h-full flex flex-col items-center pt-20">
        <h1 className="font-bold text-5xl">Anchor Your Self</h1>
        <AuthFormsContainer/>
    </div>
}