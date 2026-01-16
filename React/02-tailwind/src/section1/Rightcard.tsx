import React from 'react'

const Rightcard = (props) => {
  return (
    <div className='h-full w-80 rounded-4xl overflow-hidden relative shrink-0'>
    
    
        <div>
            
            <img className='h-full w-full object-cover' src={props.img} alt="" />
            <div className='h-full w-full p-10 flex flex-col justify-between absolute top-0 left-0'>
                <h2 className='bg-white rounded-full flex justify-center h-10 w-10 items-center'>{props.id+1}</h2>
                <div className='text-xl wrap-normal text-white w-[90%] mb-10'>{props.description}

                    <div className='flex justify-between m-2 '>
                        <button style={{backgroundColor:props.color}} className=' rounded-4xl p-2 '>{props.tag}</button>
                        <button ><i style={{backgroundColor:props.color}} className="ri-arrow-right-line  rounded-4xl p-2"></i></button>
                    </div>
</div>
                

            </div>
        </div>
    
    </div>
  )
}




export default Rightcard