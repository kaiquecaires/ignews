import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Create beautiful posts</strong>
            <p>In this guide you will learn how to create beautiful posts.</p>
          </a>

          <a href="">
            <time>12 de março de 2021</time>
            <strong>Create beautiful posts</strong>
            <p>In this guide you will learn how to create beautiful posts.</p>
          </a>

          <a href="">
            <time>12 de março de 2021</time>
            <strong>Create beautiful posts</strong>
            <p>In this guide you will learn how to create beautiful posts.</p>
          </a>
        </div>
      </main>
    </>
  )
}
