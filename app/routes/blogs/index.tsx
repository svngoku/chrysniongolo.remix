import type { LoaderFunction  ,LinksFunction} from "@remix-run/node";
import {  useLoaderData } from "@remix-run/react";
import { Repository, Gist, getRepositories , getGists } from "~/api/github";


export const loader : LoaderFunction = async () => {
    return await getGists();
}
export default function BlogsIndexPage() {
    const gists : Gist[] = useLoaderData<Gist[]>();
    return (
        <>
            <div>
                <h1>Blogs</h1>
                <div>
                {
                    gists.map((gist) => (
                        <ol className="border-l border-gray-300">
                            <li>
                                <div className="flex flex-start items-center pt-3">
                                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                                <p className="text-gray-500 text-sm">{gist.created_at}</p>
                                </div>
                                <div className="mt-0.5 ml-4 mb-6">
                                {/* <h4 className="text-gray-800 font-semibold text-xl mb-1.5">{gist.description}</h4> */}
                                <p className="text-gray-500 mb-3">{gist.description}</p>
                                </div>
                            </li>
                        </ol>  
                    ))
                }
                </div>
            </div>
        </>
    )
}