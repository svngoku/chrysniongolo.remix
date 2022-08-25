import { RemixBrowser } from "@remix-run/react";

export default function Header() {
    return (
        <>
            <div className="relative mx-10vw">
                <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl lg: mb-24 h-auto pt-24 lg:min-h-[40rem] lg:pb-12 lg:mb-64">
                    <div className="col-span-full mb-12 lg:mb-0 px-10 lg:col-span-5 lg:col-start-7">
                    <img className="h-76 w-full object-contain max-h-50vh scale-100" 
                        alt="Illustration of my emoji" 
                        src="https://d1fdloi71mui9q.cloudfront.net/QEL9PkV7SV6j63pINHrK_4pFr9whWqSVqOlY2"
                        sizes="(max-width: 1023px) 50vw, (min-width: 1024px) and (max-width: 1279px) 50vw, (min-width: 1280px) 900px" 
                        style={{ opacity: 1, transform: "none"}}
                    />
                    </div>
                    <div className="mx-8 col-span-full pt-6 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5">
                        <div className="flex flex-auto flex-col" style={{ opacity: 1}}>
                            <div>
                                <h2 className="font-mono leading-tight text-3xl md:text-4xl text-black dark:text-dark">Hi, I'm Chrys Fé-Marty NIONGOLO, a Full-Stack and Big Data Engineer</h2>
                            </div>
                            <div>
                                <p className="leading-tight text-3xl md:text-4xl text-gray-400 dark:text-slate-500 mt-3">
                                    I make the world a better place by teaching people like you how to make quality software.
                                </p>
                            </div>
                        </div>
                        <div className="mt-14 flex flex-col space-y-4">
                            <div className="mr-auto flex flex-col gap-4">

                            </div>
                        </div>
                        <div className="hidden pt-12 lg:block">
                            <a className="text-primary inline-flex items-center text-left font-medium focus:outline-none cursor-pointer transition text-lg" href="/about#about-me">
                                <div className="relative inline-flex h-14 w-14 flex-none items-center justify-center p-1">
                                    <div className="absolute text-gray-200 dark:text-gray-600">
                                        <svg width="60" height="60">
                                            <circle stroke="currentColor" stroke-width="2" fill="transparent" r="28" cx="30" cy="30"></circle>
                                            <circle className="text-primary" stroke="currentColor" stroke-width="2" fill="transparent" r="28" cx="30" cy="30" transform-origin="30px 30px" stroke-dashoffset="175.92918860102841"></circle>
                                        </svg>
                                    </div>
                                    <span>
                                        <svg className="transform rotate-0" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                </div>
                                <span className="ml-8 text-xl font-medium">Learn more about me</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};