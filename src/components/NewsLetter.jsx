import React from 'react'
import Banner from '../shared/Banner'
import ballon from '../assets/ballon.png'

const NewsLetter = () => {
  return (
      <div className='md:px-6 p-4 max-w-screen-2xl mx-auto my-12'>
        <Banner banner={ballon} heading="Each student an share their discount code for friends"
        subheading="A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”"
        button1={'I have a code'} button2={'Discount'}
        />
    </div>
  )
}

export default NewsLetter