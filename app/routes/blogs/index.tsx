import type { LoaderFunction  ,LinksFunction, MetaFunction} from "@remix-run/node";
import {  useLoaderData } from "@remix-run/react";
import { Repository, Gist, getRepositories , getGists } from "~/api/github";
import { getDatabaseById } from "~/api/notion";


export const loader : LoaderFunction = async () => {
    const id = "789d826f353a4bfb99c4fa4218f167ce"
    return getDatabaseById(id);
}
export default function BlogsIndex() {
    const page = useLoaderData();
    return (
            <div className="relative mx-10vw">
                <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl">
                    <h1>Blogs</h1>
                    <div>
                        {

                        }
                    </div>
                </div>
            </div>
    )
}

export const meta: MetaFunction = () => {
    return {
        title: "Blogs | chrysniongolo.com",
        description: "Blogs Page",
    }
}