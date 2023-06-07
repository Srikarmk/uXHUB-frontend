import './css/main.css'
import Landing from './components/landing/Landing'
import { Link } from 'react-router-dom'
function App () {
  return (
    <>
      <nav className='bg-gray-950  w-[100vw]'>
        <div className='flex w-[100vw] h-[10vh]'>
          <h1 className='text-3xl text-white font-poppins font-semibold p-4  w-[35%] items-center'>
            <Link to='/'>uXHUB</Link>
          </h1>

          <ul className='text-white space-x-10 items-center flex w-[50%] '>
            <li className='font-semibold hover:text-yellow-300'>
              <Link to='/Home'>Home</Link>
            </li>
            <li className='font-semibold hover:text-yellow-300'>
              <a href='#'>Explore</a>
            </li>
            <li className='font-semibold hover:text-yellow-300'>
              <a href='#'>Learn</a>
            </li>
            <li className='font-semibold hover:text-yellow-300'>
              <a href='#'>Trending</a>
            </li>
            <li className='font-semibold hover:text-yellow-300'>
              <a href='#'>Posts</a>
            </li>
          </ul>
          <div className='flex items-center'>
            <button
              type='button'
              className='bg-gradient-to-r from-sky-500 to-indigo-500 w-[10vw] h-[5.5vh]  text-white font-medium text-s leading-tight  rounded-full  hover:text-yellow-300 transition-all duration-200 border-t-2 '
            >
              Connect wallet
            </button>
          </div>
        </div>
      </nav>
      <Landing></Landing>
    </>
  )
}

export default App
