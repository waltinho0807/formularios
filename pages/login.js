import Login from '../components/Login'
import Head from 'next/head'

const Signin = () => {
    return (
        <>
        <Head>
        
        <link rel="stylesheet" href="/css/signin.css" />
        </Head>
        <div className="container ">
        <Login/>
        </div>
        </>
    )
}

export default Signin