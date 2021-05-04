import Register from '../components/Register'
import Head from 'next/head'

const Signup = () => {
    return (
        <>
        <Head>
        
        <link rel="stylesheet" href="/css/signin.css" />
        </Head>
        <div className="container ">
        <Register/>
        </div>
        </>
    )
}

export default Signup