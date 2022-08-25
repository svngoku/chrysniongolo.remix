import { Link, useLoaderData } from "@remix-run/react";

export default function NavBar() {
  return (
    <>
        <div className="pl-2 px-5vw py-9 lg:py-12 bg-white px-2 sm:px-4 py-2.5 dark:bg-white-900 w-full z-50 top-0 left-0">
            <nav className="text-primary mx-auto flex max-w-8xl items-center justify-between justify-around ">
                <div className="flex items-center">
                    <a className="text-primary underlined focus:outline-none block whitespace-nowrap text-2xl font-medium transition" href="/">
                    <img src="https://d1fdloi71mui9q.cloudfront.net/kSJ9SThSZ2vYvyXCbELw_2.png" className="mr-3 h-6 sm:h-9 " alt="logo" /></a>
                </div>
                    <ul className="hidden lg:flex">
                            {[
                                ['Home', '/'],
                                ['Blog', '/blogs'],
                                ['Courses', '/courses'],
                                ['Playground', '/playground'],
                            ].map(([title, url]) => (
                                <li  className="px-5 py-2">
                                    <Link to={url} key={title} prefetch="intent">
                                        <a className="underlined focus:outline-none block whitespace-nowrap text-lg font-medium hover:text-team-current focus:text-team-current text-secondary">{title}</a>
                                    </Link>
                                </li>
                            ))}
                </ul>
                <div className="flex items-center justify-center space-x-4">
                    <div className="noscript-hidden hidden lg:block">
                        <button className="border-secondary hover:border-primary focus:border-primary focus:outline-none inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 p-1 transition w-14">
                            <div className="relative p-1 h-8 w-8">
                                <span className="dark:text-dark">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                    </svg>
                                </span>
                            </div>
                        </button>
                    </div>

                    <div className="focus:outline-none ml-4 inline-flex h-14 w-14 items-center justify-center rounded-full">
                        <button className="border-secondary hover:border-primary focus:border-primary focus:outline-none inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 p-1 transition w-14">
                            <div className="relative p-1 h-8 w-8">
                                <span className="dark:text-dark">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    </>
  );
}
