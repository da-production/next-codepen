'use client'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { less } from '@codemirror/lang-less';
import { githubLight, githubLightInit, githubDark, githubDarkInit } from '@uiw/codemirror-theme-github';
import { sublime, sublimeInit } from '@uiw/codemirror-theme-sublime';

import React from 'react';
export default function CodeEditor({title,language,updateCode,defaultCode='',mode})
{
    
    const onChange = React.useCallback((value, viewUpdate) => {
        updateCode(value);
    }, []);
    
    return(
        <>
            <div className='w-full p-4 bg-secondary text-white '>{title}</div>
            <div className='overflow-auto' style={{height: 'calc(100% - 56px)'}}>
            <CodeMirror
            
                value={defaultCode}
                theme={mode=='dark'?githubLight:sublime}
                extensions={[
                    language == 'html' ? html() : (language=='css'?less():(language=='js'? javascript({ jsx: true }):javascript({ jsx: true })))
                ]}
                onChange={onChange}
            />
            </div>

        </>
    )
}