'use client'
import anime from 'animejs';
import Image from 'next/image';
import React, {useEffect, useState} from 'react';

export default function SplashScreen({finishLoading}) {
    const [isMounted,
        setIsMounted] = useState(false)
    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        })
        loader.add({
            targets: "#logo",
            delay: 0,
            scale:1,
            duration:500,
            easing: "easeInOutExpo",
        }).add({
            targets: "#logo",
            delay: 0,
            scale:1.25,
            duration:500,
            easing: "easeInOutExpo",
        }).add({
            targets: "#logo",
            delay: 0,
            scale:1,
            duration:500,
            easing: "easeInOutExpo",
        }).add({
            targets: "#logo",
            delay: 0,
            scale:1.25,
            duration:500,
            easing: "easeInOutExpo",
        })
    }

    useEffect(()=>{
        const timeout = setTimeout(()=>setIsMounted(true),10)
        animate()
        return () => clearInterval(timeout)
    })

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <Image id="logo" src="/images/logo.png" alt="codelab logo" width={75} height={75} />
            <p className='text-heading3-bold mt-3'>Loading...</p>
        </div>
    )
}