import React from 'react'
//////////
import simple from '../../assets/1093274.png'
const Value = () => {
  return(
    <div className='mb-[4rem] mt-[6rem] '>
      <h1 className='text-white text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block '>The value that hodls us true and to account</h1>
      <div className='grid gap-[10rem] grid-cols-3 items-center '>
        <div className='singleGrid rounded-[10px] bg-white hover:bg-[#eeedf7] p-[1.5rem] border-[1px]  '>
          <div className='flex items-center gap-3 '>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center '>
              <img src={simple} alt="" className='w-[70%]' />
            </div>
            <span className='font-semibold text-textColor text -[18px]'>Simplicité

            </span>    
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>La simplicité est l'habit de la perfection.
          </p>
        </div>
        <div className='singleGrid rounded-[10px] bg-white hover:bg-[#eeedf7] p-[1.5rem] border-[1px]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={simple} alt="" className='w-[70%]' />
            </div>
            <span className='font-semibold text-textColor text -[18px]'>Simplicité

            </span>    
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>Things beins made beautiful simple are at the heart of everything we do.

          </p>
        </div>
        <div className='singleGrid rounded-[10px] bg-white hover:bg-[#eeedf7] p-[1.5rem] border-[1px]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={simple} alt="" className='w-[70%]' />
            </div>
            <span className='font-semibold text-textColor text -[18px]'>Simplicité

            </span>    
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>Things beins made beautiful simple are at the heart of everything we do.

          </p>
        </div>

      </div>
      <div className='card mt-[2rem] flex justify-between bg-bluecolor p-[5rem] rounded-[10px]'>
        <div>
          <h1 className='text-bluecolor text-[30px] font-bold'>ready to switch a caree</h1>
          <h2 className='text-textcolor text-[25px] font-bold'>Let's get started</h2>
        </div>
        <button className='border-[2px] rounded-[10px] py-[0px] px-[40px] text-[18px] font-semibold text-[#00df9a] hover:bg-white border-[#00df9a]'> Sa commence</button>


      </div>

    </div>
  )
}

export default Value
