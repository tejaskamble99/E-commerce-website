import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='home'>
    <section className='section'></section>

    <h1>Latest Product
<Link to='/search' className='findmore'>
  More
</Link>

    </h1>
    <main className='main'>

    </main>
    </div>
  )
}

export default Home
