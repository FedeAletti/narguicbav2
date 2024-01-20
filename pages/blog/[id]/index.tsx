import { PostCard } from '@/components/ui/Card/PostCard'
import DefaultLayout from '@/layouts/default'
import React from 'react'

const PostPage = () => {
  return (
    <DefaultLayout>
      <section className='min-h-screen px-5 my-5 grid grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))] w-[80vw] gap-3'>
        <h2>ACA SE VA A MOSTRAR LO QUE TENGA EL POST</h2>
      </section>
    </DefaultLayout>
  )
}

export default PostPage