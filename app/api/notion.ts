import { Client } from "@notionhq/client";

export type Page = {
    object: string;
    id: string;
    created_time: string;
    cover: Object;
    paragraphs? : any;


}

const notion : Client = new Client({
    auth: process.env.NOTION_TOKEN
});

export const getPageById = async (id : string) => {
    const page = await notion.pages.retrieve({
        page_id: id
    });
    console.log(page);
    return page;
}


export const getDatabaseById = async (id : string) => {
    const database = await notion.databases.retrieve({
        database_id: id
    });
    console.log(database);
    return database;
}