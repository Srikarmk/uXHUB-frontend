import React from 'react'
import '../../css/main.css'
import { Link } from 'react-router-dom'
import Card from './Card'
const Home = () => {
  return (
    <div>
      <div className='container bg-black w-[100vw] h-[100vh] flex flex-row items-start justify-between'>
        <div className='flex border-r-2 flex-col border-gray-200 w-[20%] h-[100vh] overflow-hidden items'>
          <h1 className='text-white text-3xl font-poppins p-6 font-bold h-[40%]'>
            <Link to='/'>uXHub</Link>
          </h1>
          <ul className='text-white flex-col space-y-10'>
            <li className='text-left px-4 space-x-4'>
              <div className='inline-block'>
                {' '}
                <svg
                  width='19'
                  height='17'
                  viewBox='0 0 19 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M8.93025 0.22876C9.24937 -0.0762533 9.75064 -0.0762533 10.0698 0.22876L16.6784 6.547L18.7437 8.52148C19.074 8.83726 19.0867 9.36219 18.7721 9.6939C18.4575 10.0255 17.9346 10.0383 17.6042 9.72242L16.9348 9.08248V15.3415C16.9348 16.2575 16.1951 17 15.2826 17H11.1522H7.84783H3.71739C2.80492 17 2.06522 16.2575 2.06522 15.3415V9.08248L1.39581 9.72242C1.06542 10.0383 0.542534 10.0255 0.227888 9.6939C-0.0867573 9.36219 -0.0740041 8.83726 0.256374 8.52148L2.32159 6.547L8.93025 0.22876ZM3.71739 7.50289V15.3415H7.02174V11.1951C7.02174 9.82111 8.13126 8.70731 9.5 8.70731C10.8687 8.70731 11.9783 9.82111 11.9783 11.1951V15.3415H15.2826V7.50289L9.5 1.97444L3.71739 7.50289ZM10.3261 15.3415V11.1951C10.3261 10.7371 9.95625 10.3659 9.5 10.3659C9.04375 10.3659 8.67391 10.7371 8.67391 11.1951V15.3415H10.3261Z'
                    fill='white'
                  />
                </svg>
              </div>
              <div className='inline-block'>
                <a href='#'>Home</a>
              </div>
            </li>
            <li className='text-left px-4 space-x-4'>
              <div className='inline-block'>
                {' '}
                <svg
                  width='19'
                  height='19'
                  viewBox='0 0 19 19'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M0 9.5C0 4.25329 4.25329 0 9.5 0C14.7467 0 19 4.25329 19 9.5C19 14.7467 14.7467 19 9.5 19C4.25329 19 0 14.7467 0 9.5ZM12.0315 8.03846C11.5514 7.20706 9.32939 5.90449 7.8736 5.11476C7.3004 4.80378 7.0138 4.64831 6.77761 4.78466C6.54143 4.92102 6.53277 5.24698 6.51548 5.89889C6.47154 7.5545 6.48855 10.1301 6.96856 10.9615C7.44857 11.793 9.67071 13.0955 11.1264 13.8852C11.6996 14.1962 11.9863 14.3517 12.2225 14.2153C12.4586 14.079 12.4672 13.753 12.4846 13.1011C12.5285 11.4455 12.5115 8.86988 12.0315 8.03846Z'
                    fill='white'
                  />
                </svg>
              </div>
              <div className='inline-block'>Trending</div>
            </li>
            <li className='text-left px-4 space-x-4'>
              <div className='inline-block'>
                {' '}
                <svg
                  width='19'
                  height='15'
                  viewBox='0 0 19 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M18.9926 5.25V13.5C18.9926 14.3285 18.3386 15 17.5317 15H1.46097C0.654077 15 0 14.3285 0 13.5V5.25C0 4.83585 0.327112 4.5 0.730486 4.5C0.831585 4.4772 0.936191 4.4772 1.03729 4.5L9.49632 10.5L17.97 4.5C18.0664 4.4793 18.1657 4.4793 18.2622 4.5C18.6655 4.5 18.9926 4.83585 18.9926 5.25ZM0.365243 1.38L0.482121 1.5L9.49632 7.5L18.5397 1.5H18.6274C18.8898 1.35285 19.0353 1.05375 18.9926 0.75C18.9926 0.33585 18.6655 0 18.2622 0H0.730486C0.327112 0 0 0.33585 0 0.75C0.00379853 1.01175 0.142883 1.25175 0.365243 1.38Z'
                    fill='white'
                  />
                </svg>
              </div>
              <div className='inline-block'> Community Post</div>
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-start w-[80%] h-[100vh] border-yellow-200 overflow-hidden'>
          {/* 2nd Column  */}
          <div className=' w-[100%] h-[10vh] flex justify-center space-x-20 items-center'>
            <div className='text-white w-[30%]'>
              <input
                type='text'
                placeholder='Search..'
                className='bg-black text-white mx-20 w-[80%] text-xs border-2 border-white p-3 rounded-full'
              />
            </div>
            <div>
              <button className='text-white bg-gradient-to-bl from-[#42FF00] to-[#00612D] pt-2 pb-3 px-6 rounded-full font-semibold'>
                Learn
              </button>
            </div>
            <div className='text-white'>
              <svg
                width='24'
                height='24'
                stroke-width='1.5'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                {' '}
                <path
                  d='M18.1336 11C18.7155 16.3755 21 18 21 18H3C3 18 6 15.8667 6 8.4C6 6.70261 6.63214 5.07475 7.75736 3.87452C8.88258 2.67428 10.4087 2 12 2C12.3373 2 12.6717 2.0303 13 2.08949'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />{' '}
                <path
                  d='M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />{' '}
                <path
                  d='M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />{' '}
              </svg>
            </div>
            <div>
              <button className='text-white bg-gradient-to-bl from-[#00A3FF] to-[#4200FF] p-3 px-6 rounded-full font-semibold'>
                Connect Wallet
              </button>
            </div>
            <div>
              <button className='p-6 m-10 text-white bg-white rounded-full'></button>
            </div>
          </div>
          <div className='m-10 p-10 text-white'>
            <Card></Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
