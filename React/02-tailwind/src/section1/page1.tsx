import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'
export const Page1 = (props) => {
  return (
    <div className='flex justify-between h-[90vh] pb-20 pt-6' >   

          <Leftcontent/>
          <Rightcontent users={props.users}/>
          

    </div>
  )
}
