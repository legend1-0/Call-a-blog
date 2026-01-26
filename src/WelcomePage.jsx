import React from 'react'
import welcome from './assets/welcome.jpeg'
import useSreenSize from './useSreenSize'
const WelcomePage = () => {
    const width = useSreenSize();
    if (width > 769) return null
  return (
    <div className='welcome_div'>
       <img src={welcome} alt="" className='welcome_image' />
     <div className='text_overlay'>
       <div className='welcome_text'> Welcome to Call'a'blog</div>
        </div>
    </div>
  )
}

export default WelcomePage
