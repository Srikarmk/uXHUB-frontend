import React from 'react'

const Card = () => {
  const like = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='25'
      fill='currentColor'
      class='bi bi-heart'
      viewBox='0 0 16 16'
    >
      {' '}
      <path d='m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z' />{' '}
    </svg>
  )
  const comment = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='25'
      fill='currentColor'
      viewBox='0 0 24 24'
    >
      <path d='M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z' />
    </svg>
  )
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-slate-800'>
      <div className='flex items-center'>
        <div className='py-3 m-3 text-white rounded-full w-[10%] h-[20%]'>
          <img
            src='https://mir-s3-cdn-cf.behance.net/projects/404/d61c70128582285.Y3JvcCw5NDEsNzM2LDEwMjgsMTEzMA.png'
            alt=''
            className='rounded-full w-[100%]'
          />
        </div>
        <div className='font-bold text-xl mb-2 mt-2 items-center'>Srikarmk</div>
      </div>

      <img
        className='w-full'
        src='https://img.freepik.com/free-vector/gradient-ui-ux-landing-page-template_23-2149053801.jpg'
        alt='Instagram post'
      />
      <div className='px-6 py-4'>
        <div className='flex justify-between'>
          <div className='flex justify-start w-[50%] items-center space-x-5'>
            <div className='m-2'>
              <a href='#'>{like}</a>
            </div>
            <div className='text-white'>
              <a href='#'>{comment}</a>
            </div>
          </div>
          <div>
            <button className='text-white bg-gradient-to-bl from-[#42FF00] to-[#00612D] p-2 px-5 rounded-full font-semibold'>
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
