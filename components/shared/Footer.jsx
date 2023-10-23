export default function Footer()
{
    return (
        <>
            <footer className="bg-gray-800 m-0">
                <div className="container max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between">
                        <small className="pt-4 pb-2 md:py-9 text-center w-full md:w-auto text-white font-normal">
                            Copyright © 2023 CodeLab. All Rights Reserves
                        </small>
                        <div className="pt-2 pb-4 md:py-9 w-full md:w-auto flex items-center justify-center gap-6">
                            <a href="https://tailwindcraft.com/page/privacy-policy" arialabel="Privacy Policy" className="text-[12.8px] text-white hover:text-primary-500">Privacy Policy</a>
                            <a href="https://tailwindcraft.com/page/terms-conditions" arialabel="Terms &amp; Conditions" className="text-[12.8px] text-white hover:text-primary-500">Terms &amp; Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}