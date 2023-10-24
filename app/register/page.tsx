const RegisterPage = () => {
    return (
        <form className="flex flex-col gap-2">
            <input className="border border-black" type="email" />
            <input  className="border border-black" type="password" />
            <button type="submit">Register</button>
        </form>
    )
}


export default RegisterPage;
