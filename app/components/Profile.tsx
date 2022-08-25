import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction  ,LinksFunction, MetaFunction} from "@remix-run/node";

export const loader: LoaderFunction = async () => {}

export default function Profile() {
    return (
        <>
            <div className="relative mx-10vw">
                <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl">
                    <div className="col-span-full lg:col-span-4">
                        <h1 className="text-center mx-3">Test</h1>
                        <div className="w-96">
                            <img alt="svngoku" className="github_profile" src="https://github-readme-streak-stats.herokuapp.com?user=Svngoku&amp;hide_border=false" />
                            <br />
                            <br />
                            <img alt="svngoku" className="github_profile" src="https://github-readme-stats.vercel.app/api?username=svngoku&amp;show_icons=true&amp;count_private=true&amp;theme=merko&amp;text_color=c9cacc&amp;" />
                            <br />
                        </div>
                    </div>
                    <div className="col-span-full mt-12 lg:col-span-6 lg:col-start-6 lg:mt-0">
                        <h2 className="font-mono leading-tight text-3xl md:text-4xl text-black dark:text-dark">
                            Passionate by computer science and research in general, I learn almost everyday to become a great computer scientist.
                        </h2>
                        <p className="mb-3 text-2xl font-medium md:text-3xl text-gray-500 dark:text-gray-400 whitespace-pre-line text-2xl font-medium md:text-2xl text-gray-400 dark:text-slate-500 mt-10">
                            I decided to learn web and mobile development by myself on Youtube, by reading programming books and articles on the web in addition to my academics courses as a Junior full stack developer and IT Project Manager.
                        </p>
                        <p className="mb-3 text-2xl font-medium md:text-3xl text-gray-500 dark:text-gray-400 whitespace-pre-line text-2xl font-medium md:text-2xl text-gray-400 dark:text-slate-500 mt-10">    
                            Now, I do Data science as Big Data Engineer
                            This allows me to become an expert in data analysis and data treatment, able to solve complex problems with deep learning techniques, machine learning, data engineering (ETL, DataLake, Data Warehousing) and data visualization. With the goal to reveal the true value of data by processing, analyzing and modeling it and then interpreting the result(s).
                        <p className="mb-3 text-2xl font-medium md:text -3xl text-gray-500 dark:text-gray-400 whitespace-pre-line text-2xl font-medium md:text-2xl text-gray-400 dark:text-slate-500 mt-10">
                            After 6 years in this binary and incredibly evolving world, I consider myself a multilingual computer programmer and a technology entrepreneur.
                        </p>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );

}

