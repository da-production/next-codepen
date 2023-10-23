'use client'
import * as React from 'react'; 
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { less } from '@codemirror/lang-less';
import { githubLight, githubLightInit, githubDark, githubDarkInit } from '@uiw/codemirror-theme-github';
import { sublime, sublimeInit } from '@uiw/codemirror-theme-sublime';
export default function ModalSettings({open,handleModal,addStyles,addScripts,setAddStyles,setAddScripts}){
    const onChangeStyles = React.useCallback((value, viewUpdate) => {
        setAddStyles(value);
    }, []);
    const onChangeScripts = React.useCallback((value, viewUpdate) => {
        setAddScripts(value);
    }, []);
    return (

        <>

        <div id="defaultModal"  aria-hidden="true" className={`fixed bg-white/70 backdrop-blur-md flex flex-cols items-center justify-center top-0 left-0 right-0 z-50 ${!open?'hidden':''} w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full`}>
            <div className="relative w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Settings
                        </h3>
                        <button onClick={()=>handleModal()} type="button" className="text-gray-400  dark:hover:bg-white/90 shadow-md bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add new style use {`<link href='...'>`} tag </label>
                        <CodeMirror
                            value={addStyles}
                            height='100px'
                            theme={githubDark}
                            extensions={[
                                html()
                            ]}
                            onChange={onChangeStyles}
                        />
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add new js use {`<script src="..."></script>`} tag </label>
                        <CodeMirror
                            value={addScripts}
                            height='100px'
                            theme={githubDark}
                            extensions={[
                                html()
                            ]}
                            onChange={onChangeScripts}
                        />
                    </div>
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button onClick={()=>handleModal()}  type="button" className="dark:bg-white text-black dark:hover:bg-white/90 shadow-md dark:text-black  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}