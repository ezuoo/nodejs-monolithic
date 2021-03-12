import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <h1 className={utilStyles.title}>
          <a href="https://microservices.io/patterns/monolithic.html">Monolithic Architecture</a>{' '}
          Web Application 
        </h1>

        <p className={utilStyles.description}>
           <code>&darr; simple APIs &darr;</code>
        </p>

        <div className={utilStyles.grid}>
          <Link href='/path/members'>
            <a className={utilStyles.card}>
              <h3>&larr; Members</h3>
            </a>
          </Link>

          <Link href='/path/goods'>
            <a className={utilStyles.card}>
              <h3>Goods &rarr;</h3>
            </a>
          </Link>

          <Link href='/path/purchases'>
            <a className={utilStyles.card}>
              <h3>&larr; Purchases</h3>
            </a>
          </Link>
          
          <Link href='/admin/index'>
            <a className={utilStyles.card}>
              <h3>Admin &rarr;</h3>
            </a>
          </Link>
        </div>
      </main>
    </Layout>
  )
}
