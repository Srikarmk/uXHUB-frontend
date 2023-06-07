import '../../css/main.css'

function Landing () {
  return (
    <>
      <section className='landing relative container w-screen h-[90vh] bg-landing-bg bg-cover'>
        <div className='mx-auto flex justify-center mb-10'>
          <h1 className='pt-20 text-5xl text-white font-poppins font-bold'>
            uXHUB
          </h1>
        </div>
        <div className='mx-auto flex justify-center mb-10'>
          <p className='pb-15 text-2xl w-1/2 text-center text-white font-poppins'>
            Unleash Your Creativity: Discover, Share, and Collaborate on
            Cutting-Edge Designs.
          </p>
        </div>
        <div
          class='flex items-center max-w-md mx-auto bg-white rounded-full mb-20'
          x-data="{ search: '' }"
        >
          <div class='w-full'>
            <input
              type='search'
              class='w-full px-4 py-1 h-12 text-gray-800 rounded-full focus:outline-none'
              placeholder='Search'
              x-model='Search'
            />
          </div>
          <div>
            <button
              type='submit'
              class='flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-full'
            >
              <svg
                class='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <div class='flex space-x-6 justify-center'>
            <div className='flex space-x-10 justify-evenly'>
              <button
                type='button'
                class='inline-block px-6 py-2 border-2  border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-slate-500 hover:bg-opacity-1 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
              >
                <a href='#'>Design</a>
              </button>
              <button
                type='button'
                class='inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-slate-500 hover:bg-opacity-1 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
              >
                <a href='#'>Design</a>
              </button>
              <button
                type='button'
                class='inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-slate-500 hover:bg-opacity-1 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
              >
                <a href='#'>Design</a>
              </button>
              <button
                type='button'
                class='inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-slate-500 hover:bg-opacity-1 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
              >
                <a href='#'>Design</a>
              </button>
              <button
                type='button'
                class='inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-slate-500 hover:bg-opacity-1 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
              >
                <a href='#'>Design</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Landing
