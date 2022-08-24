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
          Full time educator making our world better
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
          <div className="text-secondary relative flex w-24 items-center xl:mt-20 xl:w-32">
            <svg
              width={208}
              height={110}
              viewBox="0 0 208 110"
              className="absolute block w-full"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m10.7 8.7c-0.4 4.3-2.7 19-5.2 32.7s-4.5 25.7-4.5 26.5c0 2.6 1.6 4.2 3.3 3.5 2.1-0.8 2.2-2.4 0.2-2.4-1.2 0-1.5-0.7-1-3.3 0.3-1.7 1.2-6.8 1.9-11.2 1.1-7 1.5-8 3.2-7.7 10.1 1.7 21.1 1.2 43.4-2.2 28.3-4.2 50-6.9 50.7-6.3 0.2 0.3-0.1 3.3-0.7 6.7s-0.9 6.4-0.6 6.7c1.2 1.3 2.4-1.1 2.9-6.3 0.3-3.1 1-6.1 1.5-6.6 0.6-0.6 9.9-1.8 20.9-2.8 33-3.1 38.7-3.4 38-2.3-0.4 0.6-1.9 1.4-3.4 1.8-1.6 0.3-8 2.6-14.3 5-6.3 2.5-23.2 8.7-37.5 13.9s-33.2 12.2-42 15.6c-28.5 10.9-50.4 19-51.5 19-0.5 0-1 0.4-1 1 0 0.5 0.2 1 0.4 1 1.2 0 28-9.7 60.6-22 20.6-7.8 42.5-15.9 48.5-18 6.1-2.1 13.6-4.8 16.8-6s6-2 6.3-1.8c0.2 0.3-0.5 1.7-1.6 3.1-1.2 1.4-2.7 4.3-3.4 6.4-1.1 3.2-1.7 3.8-4.5 3.9-3.9 0.2-7.1 2.9-7.1 6 0 2.3 2.5 4.4 4.5 3.9 0.6-0.2 2.2-0.6 3.8-0.9 4.2-1 3.2-2.5-1.3-1.9-3.6 0.5-4 0.3-4-1.5 0-2.9 4.4-4 6.9-1.8 1.7 1.5 1.8 1.3 3-3.7 0.6-2.9 2.3-7 3.6-9 1.4-2 2.5-4.2 2.5-5s1.9-1.9 4.3-2.7c2.3-0.6 7.1-2.5 10.7-4.2 5-2.2 6.1-3.1 5-3.8-2.5-1.6-12-1.2-46.6 2-37.5 3.5-49.3 4.9-71.9 8.5-28.1 4.4-43.5 4.3-43.5-0.3 0-2.9 13.9-15.2 26.9-24 10.2-6.9 12.5-8.1 13.8-7 1.2 1 1.8 0.8 3.4-1.2 2.3-3.1 2.4-4 0.1-4-4 0-27.1 15.3-37.3 24.7-3.5 3.3-5.9 4.9-5.9 4 0-0.8 0.9-5.9 2-11.2 2-9.9 2.7-22.5 1.1-22.5-0.4 0-1.1 3.5-1.4 7.7z" />
              <path d="m165.1 40.7c-0.7 1.6-1.6 5.4-1.9 8.6-0.5 5.6-0.6 5.8-2.9 5.2-3.2-0.8-8.6 2.6-11.4 7.1-2.6 4.2-1.5 6.1 2.8 4.9 1.5-0.5 3.3-0.7 3.8-0.6 0.6 0.2 8.2 1.8 17 3.6 26.5 5.5 31.5 6.8 31.5 8 0 1.6-15.1 4-41 6.5-33.2 3.2-75.6 9.8-115.5 18-8.2 1.7-19.2 3.4-24.2 3.7-2.2066 0.132-5.0134 0.952-8.2618-0.36-1.2736-0.678-2.2382-1.25-0.5001-3.327 0.1923-0.577-0.7381-2.1132-2.0381-1.013-2 1.7-1.9 3.3 0.3 5.3 3 2.7 13.2 2.1 35.4-2.2 51.6-10 83.4-14.9 118.3-18.1 12.7-1.2 26.1-2.8 29.9-3.6 6.7-1.3 11.6-3.6 11.6-5.3 0-2.1-17.4-6.7-40.3-10.7-5.3-1-9.6-2.2-9.4-2.8 0.4-1.3 18.2-7.2 27.4-9.1 3.9-0.8 8.6-1.2 10.4-0.8 2.5 0.5 3.1 0.3 2.7-0.8-1-2.9-20.9 0-32 4.6-1.5 0.6-1.8 0.1-1.8-3.2 0-2.1 0.7-6.5 1.5-9.6 1.8-6.8 1.7-6.7 0.7-6.7-0.5 0-1.4 1.2-2.1 2.7zm-3.1 17.3c0 0.5-2 1.9-4.5 3.1s-4.8 2.5-5.1 3c-0.7 1.3-2.4 1.1-2.4-0.2 0-2.2 6.2-6.9 9.1-6.9 1.6 0 2.9 0.4 2.9 1z" />
              <path d="m84.2 49.6c-2.4 1.6-3 5.4-0.9 5.4 2.4 0 10.7-3.2 10.7-4.1 0-1.2-0.1-1.2-4.3 0.6-4.3 1.8-4.7 1.8-4.7 0.5 0-0.6 1.1-1.5 2.5-2s2.5-1.2 2.5-1.5c0-1.1-3.7-0.4-5.8 1.1z" />
              <path d="m27.6 54.4c-2.9 2.5-6.6 4.6-8 4.8-1.5 0.2-2.5 0.7-2.4 1.3 0.5 1.7 7.9 0.5 13.7-2.1 6.5-2.9 7.3-3 8.9-0.4 1.2 2 4.6 2.7 5.6 1.1 0.3-0.5-0.5-1.2-1.8-1.5s-2.6-1.5-2.9-2.7c-0.4-1.6-1.1-1.9-2.6-1.4-1.7 0.5-2.1 0.2-2.1-1.4 0-3.2-2.4-2.5-8.4 2.3zm5.1 0.3c-0.9 0.9-1.9 1.4-2.3 1.1-1-1 0.6-2.8 2.4-2.8 1.5 0 1.5 0.1-0.1 1.7z" />
              <path d="m59.2 52.3c-2.5 2.7-3 7.7-0.8 7.7 0.9 0 1.6-1.2 1.8-2.7 0.2-1.9 1.2-3.2 3.1-4.1 1.5-0.7 2.5-1.7 2.2-2.3-1.1-1.6-4.1-1-6.3 1.4z" />
              <path d="m116.1 57.6c-4.4 3.7-4.1 5.8 0.5 5.1 4.3-0.7 11.7-5.3 10.9-6.7-1.3-2.1-8.3-1.1-11.4 1.6zm6.9 0.2c0 0.9-4.4 3.2-6 3.2-2.3 0-0.7-2 2.3-2.9 1.7-0.5 3.3-1 3.5-1 0.1-0.1 0.2 0.3 0.2 0.7z" />
            </svg>
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
              Email Kent
            </a>
          </li>
          <li className="py-1">
            <a
              className="text-secondary underlined inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current focus:outline-none"
              href="/calls"
            >
              Call Kent
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
            
                {/* <div className="col-span-full md:col-span-3 xl:row-span-2">
                    <div className="text-xl font-medium md:text-2xl text-black dark:text-white">
                        Kent C. Dodds
                    </div>
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2022 <a href="http://chrysniongolo.com/" className="hover:underline">Chrys NIONGOLO</a>. 
                    All Rights Reserved.
                    </span>
                </div>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:underline">Contact</a>
                    </li>
                </ul> */}

            </div>
      </footer>
  </>
  );
}