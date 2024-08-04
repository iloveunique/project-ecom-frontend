import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
const Navbar = () => {
  const router =useRouter()
  const [show, setShow] = useState(false)
  const [search, setSearch] = useState("") 
  useEffect(() => {
    setShow(false)
  }, [router.asPath])
  return (
    <header className="shadow-md font-[sans-serif]">
  <section className="md:flex lg:items-center relative py-3 lg:px-10 px-4 border-gray-200 border-b bg-white lg:min-h-[75px] max-lg:min-h-[60px]">
    <Link href="/" className="max-sm:w-full max-sm:mb-3 shrink-0"><img src="/LocalBazaars.png" alt="logo" className="w-[170px] max-md:mx-auto" />
    </Link>
    <div className="flex flex-wrap w-full items-center">
      <div className={`flex px-6 py-3 rounded-md border-2 ${search?.length&&"border-[#EA580c]"} hover:border-[#EA580c] overflow-hidden max-w-md max-md:mx-auto font-[sans-serif] xl:w-96 max-lg:w-full lg:ml-8 max-md:mt-4 max-lg:ml-4 bg-gray-100  h-10 outline-[#333] text-sm`}>
        <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search Something..."
          className="w-full outline-none bg-transparent text-gray-600 text-sm" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-gray-600">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>
      </div>
      <div className="ml-auto max-lg:mt-4">
        <ul className="flex items-center">
          <li>
          <Link href={"https://www.google.com/"} className="max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-[#333] hover:text-[#EA580c] hover:fill-[#EA580c] cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="mr-2" viewBox="0 0 24 24">
              <g data-name="Layer 2">
                <path d="M14.5 12.75A3.22 3.22 0 0 1 12 11.6a3.27 3.27 0 0 1-2.5 1.15A3.22 3.22 0 0 1 7 11.6a2.91 2.91 0 0 1-.3.31 3.22 3.22 0 0 1-2.51.82 3.35 3.35 0 0 1-2.94-3.37v-.71a4.76 4.76 0 0 1 .24-1.5l1.57-4.7a1.75 1.75 0 0 1 1.66-1.2h14.56a1.75 1.75 0 0 1 1.66 1.2l1.57 4.7a4.76 4.76 0 0 1 .24 1.5v.71a3.35 3.35 0 0 1-2.92 3.37 3.2 3.2 0 0 1-2.51-.82c-.11-.1-.22-.22-.32-.33a3.28 3.28 0 0 1-2.5 1.17zm-9.78-10a.26.26 0 0 0-.24.17l-1.56 4.7a3.27 3.27 0 0 0-.17 1v.71a1.84 1.84 0 0 0 1.57 1.88A1.75 1.75 0 0 0 6.25 9.5a.75.75 0 0 1 1.5 0 1.67 1.67 0 0 0 1.75 1.75 1.76 1.76 0 0 0 1.75-1.75.75.75 0 0 1 1.5 0 1.67 1.67 0 0 0 1.75 1.75 1.76 1.76 0 0 0 1.75-1.75.75.75 0 0 1 1.5 0 1.75 1.75 0 0 0 1.93 1.74 1.84 1.84 0 0 0 1.57-1.88v-.71a3.27 3.27 0 0 0-.17-1l-1.56-4.7a.26.26 0 0 0-.24-.17z" data-original="#000000" />
                <path d="M20 22.75H4A1.76 1.76 0 0 1 2.25 21v-9.52a.75.75 0 0 1 1.5 0V21a.25.25 0 0 0 .25.25h16a.25.25 0 0 0 .25-.25v-9.53a.75.75 0 1 1 1.5 0V21A1.76 1.76 0 0 1 20 22.75z" data-original="#000000" />
                <path d="M15.5 22.75h-7a.76.76 0 0 1-.75-.75v-5a1.76 1.76 0 0 1 1.75-1.75h5A1.76 1.76 0 0 1 16.25 17v5a.76.76 0 0 1-.75.75zm-6.25-1.5h5.5V17a.25.25 0 0 0-.25-.25h-5a.25.25 0 0 0-.25.25z" data-original="#000000" />
              </g>
            </svg>
            Become a Supplier
            </Link>
          </li>
          <li className="max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-[#333] hover:text-[#EA580c] hover:fill-[#EA580c] cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="mr-2" viewBox="0 0 512 511">
              <path d="M497 193.3h-40.168c-1.215 0-2.418.052-3.613.13-9.024-8.051-19.004-14.7-29.68-19.82 24.348-17.294 40.262-45.712 40.262-77.778C463.8 43.266 421.035.5 368.469.5c-52.57 0-95.336 42.766-95.336 95.332 0 25.262 9.883 48.258 25.976 65.332h-70.148c16.094-17.074 25.973-40.07 25.973-65.332C254.934 43.266 212.168.5 159.602.5c-52.567 0-95.336 42.766-95.336 95.332 0 29.48 13.453 55.875 34.539 73.379-14.602 5.457-28.149 13.617-40.028 24.219a55.211 55.211 0 0 0-3.609-.13H15c-8.285 0-15 6.716-15 15v80.333c0 8.285 6.715 15 15 15h1.066v113.535c0 8.281 6.715 15 15 15h449.868c8.285 0 15-6.719 15-15V303.633H497c8.285 0 15-6.715 15-15V208.3c0-8.285-6.715-15-15-15zm-15 80.333h-25.168c-13.875 0-25.168-11.29-25.168-25.168 0-13.875 11.293-25.164 25.168-25.164H482zM303.133 95.832c0-36.023 29.308-65.332 65.332-65.332 36.023 0 65.336 29.309 65.336 65.332 0 36.027-29.309 65.332-65.332 65.332-36.028 0-65.336-29.305-65.336-65.332zM159.602 30.5c36.023 0 65.332 29.309 65.332 65.332 0 36.023-29.309 65.332-65.332 65.332-36.028 0-65.336-29.305-65.336-65.332 0-36.023 29.308-65.332 65.336-65.332zM30 223.3h25.168c13.875 0 25.168 11.29 25.168 25.169 0 13.875-11.293 25.164-25.168 25.164H30zm16.066 80.333h9.102c30.418 0 55.168-24.746 55.168-55.168 0-16.844-7.602-31.942-19.54-42.067h.356c15.504-9.918 33.535-15.23 52.383-15.23h142.887C258.664 214.566 241 249.574 241 288.633v113.535H110.332v-65.336c0-8.281-6.715-15-15-15-8.281 0-15 6.719-15 15v65.332H46.066zm419.868 98.531h-34.27v-65.332c0-8.281-6.715-15-15-15-8.281 0-15 6.719-15 15v65.332H271V288.633c0-53.742 43.723-97.465 97.469-97.465 18.933 0 37.039 5.36 52.582 15.36-11.852 10.128-19.383 25.163-19.383 41.94 0 30.419 24.746 55.165 55.168 55.165h9.098zm0 0" data-original="#000000" />
            </svg>
            Communty
          </li>
          <li className=" flex text-[15px] max-lg:py-2 px-3 hover:text-[#EA580c] hover:fill-[#EA580c] cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="mr-2" viewBox="0 0 512 512">
              <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0" data-original="#000000" />
            </svg>
  
          </li>
          <li className="flex text-[15px] max-lg:py-2 px-3 hover:text-[#EA580c] hover:fill-[#EA580c] cursor-pointer">
            <button className="px-4 py-1.5 text-sm rounded-sm font-medium text-white border-2 border-[#333] bg-[#333] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#333]">Sign
              In</button>
          </li>
          <li id="toggle" onClick={()=>setShow(!show)} className="flex lg:hidden">
            <button >
            {show?<XMarkIcon className='w-8 h-8  text-[#333]  items-center'/>:<Bars3Icon className='w-8 h-8  text-[#333]  items-center'/>}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <div id="collapseMenu" className={`flex flex-wrap whitespace-nowrap  items-center px-10 py-3 bg-[#333] relative min-h-[46px] ${show?"max-lg:block":"max-lg:hidden"}`}>
    <ul className="flex justify-center lg:space-x-4 max-lg:space-y-3 w-full max-lg:block">
      <li className="max-lg:border-b max-lg:py-2 px-3"><Link href="/" className="hover:text-yellow-300 text-yellow-300 text-[15px] font-medium block">Home</Link></li>
      <li className="max-lg:border-b max-lg:py-2 px-3"><Link href="/local" className="hover:text-yellow-300 text-white text-[15px] font-medium block">Stores</Link></li>
      <li className="max-lg:border-b max-lg:py-2 px-3"><Link href="/" className="hover:text-yellow-300 text-white text-[15px] font-medium block">Sale</Link></li>
      <li className="max-lg:border-b max-lg:py-2 px-3"><Link href="/contactus" className="hover:text-yellow-300 text-white text-[15px] font-medium block">Contact Us</Link></li>
     {/* comment here */}
      {/* <li className="max-lg:border-b max-lg:py-2 px-3"><Link href="/new" className="hover:text-yellow-300 text-white text-[15px] font-medium block">New</Link></li>
      <li className="max-lg:border-b max-lg:py-2 px-3"><Link href="/trending" className="hover:text-yellow-300 text-white text-[15px] font-medium block">Trending</Link></li>
      <li className="max-lg:border-b max-lg:py-2 px-3"><Link href="/" className="hover:text-yellow-300 text-white text-[15px] font-medium block">Digital Products</Link></li>
      <li className="max-lg:border-b max-lg:py-2 px-3"><Link href="/local" className="hover:text-yellow-300 text-white text-[15px] font-medium block">Local</Link></li>
      <li className="max-lg:border-b max-lg:py-2 px-3"><Link href="/lucky-draw" className="hover:text-yellow-300 text-white text-[15px] font-medium block">Lucky Draw</Link></li>
      <li className="max-lg:border-b max-lg:py-2 px-3"><Link href="/" className="hover:text-yellow-300 text-white text-[15px] font-medium block">Watch &amp; Earn</Link></li>
      <li className="max-lg:border-b max-lg:py-2 px-3"><Link href="/" className="hover:text-yellow-300 text-white text-[15px] font-medium block">LeaderBoard</Link></li> */}
    </ul>
  </div>
</header>

  )
}

export default Navbar

