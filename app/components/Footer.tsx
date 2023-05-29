import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='w-full bg-[#000]'>
      <div className='flex justify-between px-6 py-10'>
        <div className='text-[#4f4f4f] pointer'>
          <div>
          <h3 className='text-2xl font-bold mb-2'>O Dine Market</h3>
          <p>Small, artisan label that offers a thoughtfully curated <br/>collection of high quality everyday essentials made.</p>
          </div>
         <div className='py-4 '>
          <Link href="" className='mr-3'>
            <span className=''>Twitter</span>
          </Link> 
          <Link href="" className='mr-3'>
          <span className=''>Facebook</span>
          </Link>
          <Link href="" className='mr-3'>
          <span className=''>Linkdin</span>
          </Link>
          </div>
        </div>


        <div className='text-[#4f4f4f]'>
          <h3 className='text-2xl font-bold mb-2'>Company</h3>
          <ul>
            <Link href=""><li>About</li></Link>
            <Link href=""><li>Term of use</li></Link>
            <Link href=""><li>Privacy Policy</li></Link>
          </ul>
        </div>
        <div className='text-[#4f4f4f]'>
          <h3 className='text-2xl font-bold mb-2'>Support</h3>
          <ul>
            <Link href=""><li>Support </li></Link>
            <Link href=""><li>24h Service</li></Link>
            <Link href=""><li>Quick Chat</li></Link>
            <Link href=""><li>How it works</li></Link>
            <Link href=""><li>Contact us</li></Link>
          </ul>
        </div>
        <div className='text-[#4f4f4f]'>
          <h3 className='text-2xl font-bold mb-2'>Support</h3>
          <ul>
            <Link href=""><li>Support </li></Link>
            <Link href=""><li>24h Service</li></Link>
            <Link href=""><li>Quick Chat</li></Link>
            <Link href=""><li>How it works</li></Link>
            <Link href=""><li>Contact us</li></Link>
          </ul>
        </div>
      </div>
    <div className="text-center text-[#4f4f4f] border-t-2 border-[#3d3d3d] py-4">
          All right reserved &copy; O-Dine-Market {(new Date()).getFullYear()}
    </div>
    </div>
  )
}
