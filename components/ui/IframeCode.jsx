'use client'
export default function IframeCode({srcDoc}) {
    return (
        <div
            className="col-span-3 row-span-2 bg-white  auto-rows-max btn-shadow overflow-hidden">
            <div
                className='w-full p-4   text-white  bg-gray-900  dark:bg-gray-700'>Output</div>
            <iframe
                type="text/plain"
                title="Output"
                sandbox='allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation'
                width="100%"
                height="100%"
                srcDoc={srcDoc}/>
        </div>
    )
}