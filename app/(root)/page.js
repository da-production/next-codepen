'use client'
import CodeEditor from '@/components/shared/CodeEditor'
import Navbar from '@/components/shared/Navbar'
import IframeCode from '@/components/ui/IframeCode';
import { defaultHtml } from '@/lib/data';
import * as React from 'react'
import useLocalstorage from '@/lib/hooks/useLocalstorage';
import ModalSettings from '@/components/shared/ModalSettings';

import SplashScreen from '@/components/ui/SplashScreen';
import {usePathname} from 'next/navigation';
import { path } from 'animejs';

export default function Home() {
  // animate splash screen
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsloading] = React.useState(isHome)
  // end animate splash screen
  const [html,setHtml]      = useLocalstorage('html','');
  const [css,setCss]        = useLocalstorage('css','');
  const [js,setJs]          = useLocalstorage('js','');
  const [srcDoc,setSrcDoc]  = React.useState('')
  const [lib,setLib]        = useLocalstorage('lib','')
  const [styles,setAddStyles]          = useLocalstorage('styles','')
  const [scripts,setAddScripts]        = useLocalstorage('scripts','')
  const [mode,setMode]                = useLocalstorage('mode','');
  const [open,setOpen]    = React.useState(false)
    const handleModal = () => {
        setOpen(!open);
    }
  React.useEffect(()=>{
    //animate loading page
    if(isLoading) return 
    //end animate loading page
    const timeout = setTimeout(()=>{
      setSrcDoc(
        `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
              ${styles}
              <style>${css}</style>
          </head>
          <body>
              ${html}
              ${lib}
              ${scripts}
              <script type="text/jsx">${js}</script>
          </body>
          </html>
          `
      )
    },500)
    return () => clearTimeout(timeout)
  },[html,css,js,lib,styles,scripts])
  return (
    <>
      {
        isLoading && isHome ? <SplashScreen finishLoading={()=>setIsloading(false)} /> : (
          <>
            <ModalSettings open={open} handleModal={handleModal} addStyles={styles} addScripts={scripts} setAddStyles={setAddStyles} setAddScripts={setAddScripts} />
            <div className="grid grid-cols-3 grid-rows-4 grid-flow-row h-full w-full bg-grid-slate-900 ">
              <div className='col-span-3 row-end-1 row-span-1'>
                <Navbar setLib={setLib} lib={lib} handleModal={handleModal} mode={mode} setMode={setMode} />
              </div>
              <div className="content-box row-span-2 ml-4" style={{backgroundColor: mode=="light"?'#303841':'white'}}>
                <CodeEditor title="HTML" language="html" defaultCode={html} updateCode={setHtml} mode={mode} />
              </div>
              <div className="content-box row-span-2" style={{backgroundColor: mode=="light"?'#303841':'white'}}>
                <CodeEditor title="CSS" language="css" defaultCode={css} updateCode={setCss} mode={mode} />
              </div>
              <div className="content-box row-span-2 mr-4" style={{backgroundColor: mode=="light"?'#303841':'white'}}>
                <CodeEditor title="JS" language="js" defaultCode={js} updateCode={setJs} mode={mode} />
              </div>
              <IframeCode srcDoc={srcDoc} />
            </div>
          </>
        )
      }
    </>
  )
}
