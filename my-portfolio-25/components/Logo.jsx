import React from 'react'
import  Link  from "next/link";



const Logo = ({light = false}) => {
    // determine the logo color based on the light prop
    const colorClass= light ? "text-white" : "text-primary" //default to black
  return (
    <Link href="/" className="font-primary text-2xl tracking-[4px]">
    <span className={colorClass}> Bellazini_Julien

    </span>
    </Link>
  )
}

export default Logo