import React from 'react'
import Homepage from './Homepage'
import Navbar from './Navbar'

function page() {
    return (
        <div>
            <div className="" >
                <Navbar />
            </div>
            <div className="overflow-y-auto max-h-[470px]" >
                <Homepage />
            </div>
        </div>
    )
}

export default page
