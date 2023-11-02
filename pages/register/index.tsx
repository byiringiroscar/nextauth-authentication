import Form from "./form";
import { getSession } from "next-auth/react";

const RegisterPage = () => {
    return (
        <Form />
    );
}

export default RegisterPage;

export async function getServerSideProps(context: any) {
    const { req, res } = context;
    const session = await getSession({ req });

    // If the user is authenticated, immediately redirect on the server-side
    if (session) {
        res.writeHead(302, { Location: '/' });
        res.end();
    }

    return {
        props: {},
    };
}

