import Layout from "../components/Layout";


export default function Error({userName}){    
    return (
    <>
    <Layout userName={userName}>
        <p className="text-center font-bold text-5xl">Error</p>
        <p className="text-center ">Seems you were trying to reach a path that doesn't exist</p>
    </Layout>
    </>
    )
}
