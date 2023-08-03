import Link from "next/link";
// import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Styles from '../../components/layout.module.css'
import Layout from '../../components/layout'


const FirstPost = () => {
    return (  
        <Layout>
            <Head>
                <title>To Do List Nextjs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <h1>First Post</h1>
            <Link href="/"><h2>Back to Home</h2></Link>
            <div className={Styles.testClass}>
                ini test css HOME
            </div>
        </Layout>
    );
}
 
export default FirstPost;