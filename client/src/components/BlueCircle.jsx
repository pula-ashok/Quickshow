import React from 'react'

const BlueCircle = ({top='auto',left='auto',right='auto',bottom='auto'}) => {
  return (
     <div className='absolute h-58 w-58 aspect-square rounded-full bg-primary/30 blur-3xl -z-50' style={{top:top,right:right,left:left,bottom:bottom}}></div>
  )
}

export default BlueCircle