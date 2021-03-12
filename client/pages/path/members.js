import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css';
import 'semantic-ui-css/semantic.min.css'


import { Button, Checkbox, Form } from 'semantic-ui-react'



export default function Members() { 

    const onClickToggle = (param) => {
        // document.getElementById('submit').style.display = 'inline';

        switch (param) {
            case 'search': 
                document.getElementById('register').style.display = 'none';
                document.getElementById('search').style.display = 'inline';
                break;
            case 'register':
                document.getElementById('search').style.display = 'none';
                document.getElementById('register').style.display = 'flex';
                break;
            default :
                document.getElementById('search').style.display = 'none';
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
                    <a className={utilStyles.card} onClick={() => onClickToggle('search')}>
                        <h3>Search</h3>
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

            <Form on>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                
                <Button basic color='black' type='submit'>Submit</Button>
            </Form>
        </Layout>
    )
}