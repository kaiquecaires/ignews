import { GetStaticProps } from 'next'
import Head from 'next/head'
import Prismic from '@prismicio/client'
import { getPrismicCLient } from '../../services/prismic'
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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicCLient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post'),
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100
  })

  console.log(response)

  return {
    props: {}
  }
}
