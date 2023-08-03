import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css';

export default function Home () {
  return (  
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello world!</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dignissimos.
        </p>
      </section>
    </Layout>
  );
}
 

