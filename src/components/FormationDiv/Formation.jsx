import React from 'react'

// Icons Importées:
import {BiTimeFive} from 'react-icons/bi'
import Single from '../../assets/Single.png'
// Pour toutes les formations:
const Data = [
    {
        id:1,
        Titre:'Business Analyst',
        Temps_res: 'J-12',
        Durée:'À plein temps : 12 mois',
        Desc: 'Diplôme de niveau 6 (bac +3/4)',
        Prix:'300$',
    },
    {
        id:2,
        Titre:'Integrateur Web',
        Temps_res: '1 Mois',
        Durée:'À plein temps : 12 mois',
        Desc: 'Diplôme de niveau 6 (bac +3/4)',
        Prix:'1200$',
    },
    {
        id:3,
        Titre:'Technicien Informatique',
        Temps_res: 'J-12',
        Durée:'À plein temps : 9 mois',
        Desc: 'Diplôme de niveau 5 (bac +2)',
        Prix:'500',
    },
    {
        id:3,
        Titre:'Développeur WordPress',
        Temps_res: 'J-25',
        Durée:'Remote : 6 mois',
        Desc: 'Diplôme de niveau 5 (bac +2)',
        Prix:'550',
    },
]

const Formation = () => {
  return(
    <div>
        <div className='formationContainer flex gap-10 justify-center flex wrap items-center py-10 max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            {
                Data.map(({id,Titre,Temps_res,Durée,Desc,Prix}) =>{
                    return (
                        <div key={id} className='group group/items singleFormation border-[1px] w-[250px] p-[20px] bg-white rounded [10px] hover:bg-[#00df9a] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                             <img src={Single} alt="" />
                             <span className='flex justify-between items-center gap-4'>
                                 <h1 className='text-[16px] font-semibold text-textcolor group-hover:text-white'>{Titre}</h1>
                                <span className='flex items-center text-[#ccc] text-[20px] gap-1'>
                                 <BiTimeFive/> {Temps_res}
                                </span>
                             </span>
                             <h6>{Durée}</h6>
                             <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{Desc}
                             </p>

                             <div  className='formation flex items-center gap-2'>
                                 <span className='text-[14px] py-[1rem] block group-hover:text-white'>{Prix}</span>
                                     <button className='border-[2px] rounded-[10px] block p-[7px] w-[80px] text-[14px] font-semi-bold text-textcolor hover:bg-white group-hover/item:text-textColor '>S'inscrire
                                     </button>
                             </div>
                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default Formation
