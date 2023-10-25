'use client';
import { FormEvent } from "react";


const Form = () => {
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        console.log('hello world')
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch("/api/auth/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password')
            }),

        });
        console.log({ response })

    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-auto max-w-md mt-10">
            <input name="email" className="border border-black" type="email" />
            <input name="password"  className="border border-black" type="password" />
            <button type="submit">Register</button>
        </form>
    );
}


export default Form;