import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAddOutlined, SearchOutlined, ExceptionOutlined, LogoutOutlined, LoginOutlined, SignatureOutlined } from '@ant-design/icons';
function GlobalLayout({ children }:any) {
  const [showMenu, setShowMenu] = useState(false);



  return (
    <>
      <html className="min-h-screen">
        <body className="bg-gray-10 dark:bg-slate-200 flex min-h-screen w-full">
          <div className=" w-full flex flex-col mx-auto size-full">

            <header className="mb-2 fixed bg-cyan-600 dark:bg-gray-800 flex flex-wrap sm:justify-start sm:flex-nowrap border-b  border-b-gray-300 z-50 w-full text-sm py-1">
              <nav className="w-full  px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
                <div className="flex items-center p-3 sm:p-2 justify-between">
                  {false ? <a className="flex-none text-xl font-semibold dark:text-white  focus:ring- hidden sm:block" href="#" aria-label="Brand">
                    <UserAddOutlined color='red' className='text-white' />

                    <span className='text-white'>teste</span>
                  </a> :
                    <div className='flex gap-2 p-3'>
                      <a className="flex-none text-xl font-semibold text-white dark:text-white  focus:ring- hidden sm:block" href="#" aria-label="Brand">Luiz Moura cardapios
                      </a>
                    
                    </div>

                  }
                  <a className="flex-none text-xl font-semibold dark:text-white text-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-600 sm:hidden" href="#" aria-label="Brand">{`${false ? false : "Luiz Moura cardapios"}`}</a>

                  <div className="sm:hidden">

                    <button onClick={() => setShowMenu(!showMenu)} type="button" className=" p-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-100 hover:border-gray-200 font-medium text-gray-300 text:black shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-blue-600 transition-all text-sm" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                      <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                      <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                  </div>
                </div>
                <div id="navbar-collapse-with-animation" className={`hs-collapse ${!showMenu && "hidden"} overflow-hidden transition-all duration-300 basis-full grow sm:block`}>
                <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">

                    <Link to={"/"} className={`font-medium text-white text-xl sm:py-3  hover:text-gray-400 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer `} aria-current="page">home</Link>
                    <Link to={"/sobre"} className={`font-medium text-white text-xl $ "text-gray-50 hover:text-gray-900"} sm:py-3  hover:text-gray-400 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer `}>sobre</Link>
                    <Link to={"/contato"} className={`font-medium text-white text-xl "text-gray-50 hover:text-gray-900"} sm:py-3  hover:text-gray-400 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer `}>contato</Link>
                    
                  </div>

                </div>
              </nav>
            </header>
            <main>
              <div className="h-full pt-12 mt-5">
                {children}

              </div>
            </main>

            <footer className="mt-auto text-center py-5">

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-gray-500">© Sistema de cardapio -  2024, (FSA) - Feira de Santana - BA</p>
              </div>
            </footer>
          </div>
        </body>
      </html>
    </>
  );
}
export default GlobalLayout;
