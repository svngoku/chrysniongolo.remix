import { Client } from "@notionhq/client";

const notion : Client = new Client({
    auth: process.env.NOTION_TOKEN
});

export const getPageById = async (id : string) => {
    const page = await notion.pages.retrieve({
        page_id: id
    });
    return page;
}