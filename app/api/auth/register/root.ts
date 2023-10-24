export default async function POST(request: Request){
    try{
        const { email, password } = await request.json();
        // validate email and password also we can use popular package of zod
        console.log({ email, password });
    }
    catch(e){
        console.log({ e })
    }
}