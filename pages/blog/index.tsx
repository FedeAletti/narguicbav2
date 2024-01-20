import { PostCard } from '@/components/ui/Card/PostCard'
import DefaultLayout from '@/layouts/default'
import React from 'react'

const BlogPage = () => {
  return (
    <DefaultLayout>
      <section className='min-h-screen px-5 my-5 grid grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))] w-[80vw] gap-3'>
        <PostCard title="Blog" text='Prueba de card de post' />
        <PostCard title="Blog" text='Prueba de card de post' />
        <PostCard title="Blog" text='Prueba de card de post' />
        <PostCard title="Blog" text='Prueba de card de post' />
        <PostCard title="Blog" text='Prueba de card de post' />
      </section>
    </DefaultLayout>
  )
}

export default BlogPage