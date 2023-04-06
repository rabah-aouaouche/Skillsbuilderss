import conf from '../assets/Conferences.jpg'
import Icon from '../assets/icoon.svg'

const Cards = () => {


  return (
    <div>
      <h1 className='text-white mb-2 text-2xl justify-center flex wrap items-center p-[50px]'>Listes de conférences prévues</h1>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
         <a href="#">
         <img class="rounded-t-lg" src={conf} alt="" />
         </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <h4>Lorem ipsum dolor sit amet conse quas voluptates quod dicta ipsum dolores quidem magnam! Aspernatur.</h4>
           </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            
           </a>
         </div>
      </div>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
         <a href="#">
         <img class="rounded-t-lg" src={conf} alt="" />
         </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <h4>Lorem ipsum dolor sit amet conse quas voluptates quod dicta ipsum dolores quidem magnam! Aspernatur.</h4>
           </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            
           </a>
         </div>
      </div>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
         <a href="#">
         <img class="rounded-t-lg" src={conf} alt="" />
         </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <h4>Lorem ipsum dolor sit amet conse quas voluptates quod dicta ipsum dolores quidem magnam! Aspernatur.</h4>
           </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            
           </a>
         </div>
      </div>
      

      
      </div><h1 className='text-white mb-2 text-2xl justify-center flex wrap items-center p-[50px]'>Listes des ateliers prévues</h1>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 p-[40px]'>                    
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
            <a href="#"><img src={Icon} alt="" className='w-[13%]' /> 
                 <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
            <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
             See our guideline
            </a>
        </div>
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
            <a href="#"> <img src={Icon} alt="" className='w-[13%]' />   
                 <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
            <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
             See our guideline
            </a>
        </div>
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
            <a href="#"><img src={Icon} alt="" className='w-[13%]' /> 
                 <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
            <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
             See our guideline
            </a>
        </div>

      </div>
    </div>
  );
};

export default Cards;
