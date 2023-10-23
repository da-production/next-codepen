'use client'
import * as R from 'react';
import ModalSettings from './ModalSettings';
import useLocalstorage from '@/lib/hooks/useLocalstorage';
import Image from 'next/image';
export default function Navbar({setLib,handleModal,mode,setMode}) {
    const [libactif,setSetLibactif]     = useLocalstorage('libactif','');
    R.useEffect(()=>{
        initMode();
    },[mode]);
    const initMode = () =>{
        const element = document.getElementById("html");
        if(mode != 'light'){
            element.classList.add("light");
            element.classList.remove("dark");
        }else{
            element.classList.remove("light");
            element.classList.add("dark");
        }
    }
    const swithMode = () => {
        const element = document.getElementById("html");
        if(mode == 'light'){
            setMode('dark')
            element.classList.add("dark");
            element.classList.remove("light");
        }else{
            setMode('light')
            element.classList.remove("dark");
            element.classList.add("light");
        }
    }
    const handleLib = (l) =>{
        setSetLibactif(l);
        const react = `
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
        `;
        const vue = `
        <script src="https://cdn.jsdelivr.net/npm/vue@2.7.14"></script>
        `
        const jquery = `
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        `;
        if(l == 'react') setLib(react)
        if(l == 'vue') setLib(vue)
        if(l == 'jquery') setLib(jquery)
    }
    return (
        <nav className="bg-white/75 border-b border-gray-200  dark:border-gray-600 dark:bg-gray-700 backdrop-blur-0">
            <div
                className="flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img
                        src={`/images/logo${mode == 'light'?'': '_fill'}.png`}
                        className="h-8 mr-3"
                        alt="CodeLab Logo"/>
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeLab</span>
                </a>
                <div className="flex md:order-2">
                    
                <button onClick={()=>handleModal()}  className="block shadow-md  text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary  dark:text-white dark:focus:ring-blue-800" type="button">
                Settings
                </button>
                <button id="theme-toggle" onClick={()=>swithMode()} type="button" className="text-gray-500 ml-3 inline-flex items-center justify-center dark:text-gray-400 hover:bg-gray-100 w-10 h-10 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                    {
                        mode == 'light' ? (
                            <svg id="theme-toggle-dark-icon" className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 18 20">
                                <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
                            </svg>
                        ) : (

                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="stroke-slate-400 dark:stroke-slate-500"></path><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-slate-400 dark:stroke-slate-500"></path></svg>
                        )
                    }
                    
                    
                    <span className="sr-only">Toggle dark mode</span>
                </button>
                    <button
                        data-collapse-toggle="navbar-cta"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-cta"
                        aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-cta">
                    <ul
                        className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0   dark:border-gray-700">
                        
                        <li>
                            <button
                                onClick={()=>handleLib('react')}
                                className="flex flex-col items-center py-2 pl-3 pr-4 text-gray-900  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    <Image src='/images/reactjs-3d.webp' alt='react' width={48} height={48} />
                                    <div className={`bg-primary h-2 w-2 rounded-full ${libactif != 'react'?'hidden':''}`} ></div>
                                </button>
                        </li>
                        <li>
                            <button
                                onClick={()=>handleLib('vue')}
                                className="flex flex-col items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    <Image src='/images/vuejs-3d.png' alt='react' width={48} height={48} />
                                    <div className={`bg-primary h-2 w-2 rounded-full ${libactif !='vue'?'hidden':''}`} ></div>
                                </button>
                        </li>
                        <li>
                            <button
                                onClick={()=>handleLib('jquery')}
                                className="flex flex-col items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    <Image src='/images/jquery-3d.png' alt='react' width={48} height={48} />
                                    <div className={`bg-primary h-2 w-2 rounded-full ${libactif !='jquery'?'hidden':''}`} ></div>
                                </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}