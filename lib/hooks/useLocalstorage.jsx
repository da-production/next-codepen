'use client'
import * as React from 'react';

const PREFIX = "codelab-";

export default function useLocalstorage(key,initialValue)
{   
    const prefixedkey = PREFIX + key;
    const [value,setValue]      = React.useState(()=>{
        if (typeof window !== 'undefined') {
            const jsonValue = localStorage.getItem(prefixedkey);
            if(jsonValue != null) return JSON.parse(jsonValue)
        }
        if(typeof initialValue === 'function') return initialValue()
        return initialValue
    })

    React.useEffect(()=>{
        localStorage.setItem(prefixedkey,JSON.stringify(value));
    },[prefixedkey,value])

    return [value,setValue];
}