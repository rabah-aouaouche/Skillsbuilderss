import React from 'react'

//Icons importée
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'


const Footer = () => {
  return(
    <div className='footer p-[5rem] mb-4 bg-[#00df9a] rounded-[10px] gap-8 grid  items-center border[1px] justify-center max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

      <div>
        <div className='logoDiv'>
          <h1 className='logo text-[25px] text-white pb-[1.5rem]'>
            <strong>Skills</strong>Buillders
          </h1>
        </div>
        <p className='text-white pb-[13px] opacity-70 leading-7'>
          Lorem ipsum, dat aspernatur aperes nemo mollitia odio? A provident consequuntur officia consectetur suscipit explicabo sapiente nam repudiandae cumque
        </p>
      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb[1.5rem] text-white'>
          Companie
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>A Propos</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Nouveauté</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>
        </div>
      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb[1.5rem] text-white'>
          Support
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Evénement</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Promotions</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Nouveauté</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Carrières</li>
        </div>
      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb[1.5rem] text-white'>
          Ressources
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Comptes</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Centre de support</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Feedback</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Nous Contacter</li>
        </div>
      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb[1.5rem] text-white'>
          Info Contact
        </span>
        <div className='grid gap-3'>
          <small className='text-[14px] text-white'>
            SkillsBuillders@outlook.com
          </small>
          <div className='icons flex gap-4 py-[1rem]'>
            <AiFillInstagram className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-[#00df9a]'/>
            <AiFillFacebook className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-[#00df9a]'/>
            <AiOutlineTwitter className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-[#00df9a]'/>


          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
