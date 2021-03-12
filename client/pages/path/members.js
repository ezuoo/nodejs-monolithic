import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function Members() { 

    const onClickToggle = (param) => {
        
        switch (param) {
            case 'members': 
                document.getElementById('register').style.display = 'none';
                document.getElementById('members').style.display = 'inline';
                break;
            case 'register':
                document.getElementById('members').style.display = 'none';
                document.getElementById('register').style.display = 'inline';
                break;
            default :
                document.getElementById('members').style.display = 'none';
                document.getElementById('register').style.display = 'none';
                break;
        }
    }

    return (
        <Layout Member>
            <Head>
            <title>{siteTitle}</title>
            </Head>
            
            <main>
                <h1 className={utilStyles.title}>Member</h1>

                <div className={utilStyles.grid}  id='menu'>
                    <a className={utilStyles.card} onClick={() => onClickToggle('members')}>
                        <h3>Members</h3>
                    </a>

                    <a className={utilStyles.card} onClick={() => onClickToggle('register')}>
                        <h3>Register</h3>
                    </a>
                    <Link href='/'>
                        <a className={utilStyles.card}>
                            <h3>Home</h3>
                        </a>
                    </Link>
                </div>
            </main>
        
            <section className={utilStyles.members} id="members">
                members
            </section>
        
            <section className={utilStyles.register} id="register">
                register
            </section>
        </Layout>
    )
}