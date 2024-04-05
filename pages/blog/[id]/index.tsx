import { PostCard } from "@/components/ui/Card/PostCard"
import DefaultLayout from "@/layouts/default"
import React from "react"

const PostPage = () => {
	return (
		<DefaultLayout>
			<div className="w-screen h-[20vh] bg-red-300"></div>
			<h2 className="text-3xl font-bold text-center my-8">
				ACA SE VA A MOSTRAR LO QUE TENGA EL POST
			</h2>
			<section className="min-h-screen px-5 my-5 grid place-content-center w-[80vw] gap-3"></section>
		</DefaultLayout>
	)
}

export default PostPage
