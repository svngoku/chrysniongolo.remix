import { Link, useLoaderData } from "@remix-run/react";

export default function Footer() {
  return (
    <>
      <footer className="border-t border-gray-200 pb-16 pt-48 dark:border-gray-600"
            >
                <div className="relative mx-10vw">
                <div className="relative mx-auto grid max-w-7xl grid-cols-4 grid-rows-max-content gap-x-4 md:grid-cols-8 xl:grid-cols-12 xl:gap-x-6">
          <div className="col-span-full md:col-span-3 xl:row-span-2">
            <div>
              <div className="text-xl font-medium md:text-2xl text-black dark:text-dark">
                Chrys Fé-Marty NIONGOLO
              </div>
              <p className="text-secondary mt-6 max-w-md text-2xl">
                Full time passionate learner and trying to build a better world
              </p>
              <div className="text-secondary mt-6 flex items-center justify-between gap-4 xl:flex-col xl:items-start">
                <div className="flex gap-4">
                  <a
                    href="https://github.com/svngoku"
                    className=" text-primary focus:outline-none hover:text-team-current focus:text-team-current"
                  >
                    <svg width={32} height={32} fill="none" viewBox="0 0 24 24">
                      <title>GitHub</title>
                      <path
                        fill="currentColor"
                        d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/cniongolo"
                    className=" text-primary focus:outline-none hover:text-team-current focus:text-team-current"
                  >
                    <svg width={32} height={32} fill="none" viewBox="0 0 24 24">
                      <title>Twitter</title>
                      <path
                        fill="currentColor"
                        d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full mt-20 md:col-span-5 md:col-start-1 xl:hidden">
            <div>
              <div className="text-lg font-medium text-black dark:text-white">
                Stay up to date
              </div>
              <div className="mt-4 max-w-md">
                <p className="max-w-full text-lg text-secondary">
                  Subscribe to the newsletter to stay up to date with articles,
                  courses and much more!
                  <a
                    className="text-secondary underlined hover:text-team-current focus:text-team-current"
                    href="/subscribe"
                  >
                    Learn more{/* */}{" "}
                    <svg
                      className="inline-block transform -rotate-135"
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </p>
              </div>
              <div className="mt-8">
                <form
                  method="post"
                  action="/action/convert-kit"
                  encType="application/x-www-form-urlencoded"
                >
                  <div style={{ position: "absolute", left: "-9999px" }}>
                    <label htmlFor="website-url-:R1kq:">Your website</label>
                    <input
                      type="text"
                      id="website-url-:R1kq:"
                      name="url"
                      tabIndex={-1}
                      autoComplete="nope"
                    />
                  </div>
                  <input type="hidden" name="formId" defaultValue="newsletter" />
                  <input type="hidden" name="convertKitTagId" defaultValue="" />
                  <input
                    type="hidden"
                    name="convertKitFormId"
                    defaultValue={827139}
                  />
                  <div className="mb-8">
                    <div className="mb-4 flex items-baseline justify-between gap-2">
                      <label
                        htmlFor=":Rnkq:-firstName"
                        className="inline-block text-lg text-gray-500 dark:text-slate-500"
                      >
                        First name
                      </label>
                    </div>
                    <input
                      autoComplete="firstName"
                      name="firstName"
                      id=":Rnkq:-firstName"
                      className="placeholder-gray-500 dark:disabled:text-slate-500 focus-ring px-11 py-8 w-full text-black disabled:text-gray-400 dark:text-white text-lg font-medium bg-gray-100 dark:bg-gray-800 rounded-lg"
                      defaultValue=""
                    />
                  </div>
                  <div className="mb-8">
                    <div className="mb-4 flex items-baseline justify-between gap-2">
                      <label
                        htmlFor=":Rrkq:-email"
                        className="inline-block text-lg text-gray-500 dark:text-slate-500"
                      >
                        Email
                      </label>
                    </div>
                    <input
                      autoComplete="email"
                      name="email"
                      id=":Rrkq:-email"
                      className="placeholder-gray-500 dark:disabled:text-slate-500 focus-ring px-11 py-8 w-full text-black disabled:text-gray-400 dark:text-white text-lg font-medium bg-gray-100 dark:bg-gray-800 rounded-lg"
                      defaultValue=""
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-primary inline-flex items-center text-left font-medium focus:outline-none cursor-pointer transition pt-4"
                  >
                    <span className="mr-8 text-xl font-medium">Sign me up</span>
                    <div className="relative inline-flex h-14 w-14 flex-none items-center justify-center p-1">
                      <div className="absolute text-gray-200 dark:text-gray-600">
                        <svg width={60} height={60}>
                          <circle
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="transparent"
                            r={28}
                            cx={30}
                            cy={30}
                          />
                          <circle
                            className="text-primary"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="transparent"
                            r={28}
                            cx={30}
                            cy={30}
                            style={{
                              strokeDasharray: "175.929, 175.929",
                              transform: "rotate(-90deg)",
                              transformOrigin: "0px 0px"
                            }}
                            transform-origin="0px 0px"
                            strokeDashoffset="175.92918860102841"
                          />
                        </svg>
                      </div>
                      <span style={{ transform: "none" }}>
                        <svg
                          className="transform -rotate-90"
                          width={32}
                          height={32}
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-2 mt-20 md:col-start-5 md:row-start-1 md:mt-0">
            <div>
              <div className="text-lg font-medium text-black dark:text-white">
                Contact
              </div>
              <ul className="mt-4">
                <li className="py-1">
                  <a
                    className="text-secondary underlined inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current focus:outline-none"
                    href="/contact"
                  >
                    Contact Me
                  </a>
                </li>
                <li className="py-1">
                  <a
                    className="text-secondary underlined inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current focus:outline-none"
                    href="/office-hours"
                  >
                    Office hours
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 mt-20 md:col-start-7 md:row-start-1 md:mt-0 xl:col-start-5 xl:row-start-2 xl:mt-16">
            <div>
              <div className="text-lg font-medium text-black dark:text-white">
                General
              </div>
              <ul className="mt-4">
                <li className="py-1">
                  <a
                    className="text-secondary underlined inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current focus:outline-none"
                    href="/transparency"
                  >
                    My Mission
                  </a>
                </li>
                <li className="py-1">
                  <a
                    className="text-secondary underlined inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current focus:outline-none"
                    href="/transparency#privacy"
                  >
                    Privacy policy
                  </a>
                </li>
                <li className="py-1">
                  <a
                    className="text-secondary underlined inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current focus:outline-none"
                    href="/transparency#terms"
                  >
                    Terms of use
                  </a>
                </li>
                <li className="py-1">
                  <a
                    className="text-secondary underlined inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current focus:outline-none"
                    href="/conduct"
                  >
                    Code of conduct
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-full mt-20 md:col-span-2 md:col-start-7 xl:col-start-5 xl:row-span-2 xl:row-start-1 xl:ml-56 xl:mt-0">
            <div>
              <div className="text-lg font-medium text-black dark:text-white">
                Sitemap
              </div>
              <ul className="mt-4">
                <li className="py-1">
                  <a
                    className="text-secondary underlined inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current focus:outline-none"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="py-1">
                  <a
                    className="text-secondary underlined inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current focus:outline-none"
                    href="/blog"
                  >
                    Blog
                  </a>
                </li>
                <li className="py-1">
                  <a
                    className="text-secondary underlined inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current focus:outline-none"
                    href="/courses"
                  >
                    Courses
                  </a>
                </li>
                <li className="py-1">
                  <a
                    className="text-secondary underlined inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current focus:outline-none"
                    href="/discord"
                  >
                    Discord
                  </a>
                </li>
                <li className="py-1">
                  <a
                    className="text-secondary underlined inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current focus:outline-none"
                    href="/chats"
                  >
                    Chats Podcast
                  </a>
                </li>
                <li className="py-1">
                  <a
                    className="text-secondary underlined inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current focus:outline-none"
                    href="/workshops"
                  >
                    Workshops
                  </a>
                </li>
                <li className="py-1">
                  <a
                    className="text-secondary underlined inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current focus:outline-none"
                    href="/talks"
                  >
                    Talks
                  </a>
                </li>
                <li className="py-1">
                  <a
                    className="text-secondary underlined inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current focus:outline-none"
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li className="py-1">
                  <a
                    className="text-secondary underlined inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current focus:outline-none"
                    href="/credits"
                  >
                    Credits
                  </a>
                </li>
                <li className="py-1">
                  <a
                    className="text-secondary underlined inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current focus:outline-none"
                    href="/sitemap.xml"
                  >
                    Sitemap.xml
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-4 col-start-9 row-span-2 row-start-1 mt-0 hidden xl:block">
            <div>
              <div className="text-lg font-medium text-black dark:text-white">
                Stay up to date
              </div>
              <div className="mt-4 max-w-md">
                <p className="max-w-full text-lg text-secondary">
                  Subscribe to the newsletter to stay up to date with articles,
                  courses and much more!
                  <a
                    className="text-secondary underlined hover:text-team-current focus:text-team-current"
                    href="/subscribe"
                  >
                    Learn more{/* */}{" "}
                    <svg
                      className="inline-block transform -rotate-135"
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </p>
              </div>
              <div className="mt-8">
                <form
                  method="post"
                  action="/action/convert-kit"
                  encType="application/x-www-form-urlencoded"
                >
                  <div style={{ position: "absolute", left: "-9999px" }}>
                    <label htmlFor="website-url-:R1sq:">Your website</label>
                    <input
                      type="text"
                      id="website-url-:R1sq:"
                      name="url"
                      tabIndex={-1}
                      autoComplete="nope"
                    />
                  </div>
                  <input type="hidden" name="formId" defaultValue="newsletter" />
                  <input type="hidden" name="convertKitTagId" defaultValue="" />
                  <input
                    type="hidden"
                    name="convertKitFormId"
                    defaultValue={827139}
                  />
                  <div className="mb-8">
                    <div className="mb-4 flex items-baseline justify-between gap-2">
                      <label
                        htmlFor=":Rnsq:-firstName"
                        className="inline-block text-lg text-gray-500 dark:text-slate-500"
                      >
                        First name
                      </label>
                    </div>
                    <input
                      autoComplete="firstName"
                      name="firstName"
                      id=":Rnsq:-firstName"
                      className="placeholder-gray-500 dark:disabled:text-slate-500 focus-ring px-11 py-8 w-full text-black disabled:text-gray-400 dark:text-white text-lg font-medium bg-gray-100 dark:bg-gray-800 rounded-lg"
                      defaultValue=""
                    />
                  </div>
                  <div className="mb-8">
                    <div className="mb-4 flex items-baseline justify-between gap-2">
                      <label
                        htmlFor=":Rrsq:-email"
                        className="inline-block text-lg text-gray-500 dark:text-slate-500"
                      >
                        Email
                      </label>
                    </div>
                    <input
                      autoComplete="email"
                      name="email"
                      id=":Rrsq:-email"
                      className="placeholder-gray-500 dark:disabled:text-slate-500 focus-ring px-11 py-8 w-full text-black disabled:text-gray-400 dark:text-white text-lg font-medium bg-gray-100 dark:bg-gray-800 rounded-lg"
                      defaultValue=""
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-primary inline-flex items-center text-left font-medium focus:outline-none cursor-pointer transition pt-4"
                  >
                    <span className="mr-8 text-xl font-medium">Sign me up</span>
                    <div className="relative inline-flex h-14 w-14 flex-none items-center justify-center p-1">
                      <div className="absolute text-gray-200 dark:text-gray-600">
                        <svg width={60} height={60}>
                          <circle
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="transparent"
                            r={28}
                            cx={30}
                            cy={30}
                          />
                          <circle
                            className="text-primary"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="transparent"
                            r={28}
                            cx={30}
                            cy={30}
                            style={{
                              strokeDasharray: "175.929, 175.929",
                              transform: "rotate(-90deg)",
                              transformOrigin: "30px 30px"
                            }}
                            transform-origin="30px 30px"
                            strokeDashoffset="175.92918860102841"
                          />
                        </svg>
                      </div>
                      <span style={{ transform: "none" }}>
                        <svg
                          className="transform -rotate-90"
                          width={32}
                          height={32}
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
            <div className="col-span-full mt-24 text-lg text-gray-500 dark:text-slate-500 md:mt-44">
              <span>All rights reserved</span>{" "}
              <span className="block md:inline">© Chrys Fé-Marty NIONGOLO 2022</span>
            </div>
        </div>
        </div>
      </footer>
    </>
  );
}
