import React from 'react'
import image from '../assets/imagetech.png'
import Banner from '../shared/Banner'

function Home() {
  return (
    <div className='md:px-6 p-4 max-w-screen-2xl mx-auto mt-12' id='home'>
        <Banner banner={image} heading="Develop your skills without diligence"
        subheading="A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China."
        button1={'Get Started'} button2={'Discount'}
        />
    </div>
  )
}

export default Home