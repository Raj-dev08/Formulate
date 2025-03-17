import React from 'react'
import "@/styles/globals.css"
import Link from 'next/link'

const Form = ({type,post,setPost,submitting,handleSubmit}) => {
    console.log(post);
  return (
    <section className='h-[80vh] w-[100vw] flex-center flex-col'>
        <div className='font-black text-2xl mt-10 '>
            <h1 className='orange_gradient'>Share formulas and help others</h1>
        </div>
        <form onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-sans font-bold text-base text-gray-700'>
            Your Formula
          </span>

          <textarea
            value={post?.formula||''}
            onChange={(e) => setPost({ ...post, formula: e.target.value })}
            placeholder='Write your Formula here'
            required
            className='form_textarea '
          />
        </label>

        <label>
          <span className='font-bold font-sans text-base text-gray-700'>
            Class of Formula{"   "}
            <span className='font-bold'>
              (class11,jeemain,boards etc)
            </span>
          </span>
          <input
            value={post?.tag||''}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='Tag'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm bg-black p-2 rounded-full text-white'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-orange-600 rounded-full text-white'
          >{type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form