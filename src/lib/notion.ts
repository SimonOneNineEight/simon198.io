import { Client } from "@notionhq/client";
import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

const getPostList = async () => {
  const myPosts = await notion.databases.query({
    database_id: `${process.env.NOTION_DATABASE}`,
  });

  const postList = myPosts.results
    //@ts-expect-error
    .filter((p) => p.properties.published.checkbox)
    .map(
      //@ts-expect-error
      ({ id, properties, created_time, last_edited_time }) => ({
        id,
        title: properties.Title.title[0].plain_text,
        //@ts-expect-error
        tags: properties.tags.multi_select.map((tag) => tag.name),
        description: properties.description.rich_text[0]?.plain_text,
        image: properties.image.files[0],
        views: properties.views.number,
        created_time,
        last_edited_time,
      })
    );

  return postList;
};

const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  //@ts-expect-error
  const { id, properties, created_time, last_edited_time } = response;
  const page = {
    id,
    title: properties.Title.title[0].plain_text,
    //@ts-expect-error
    tags: properties.tags.multi_select.map((tag) => tag.name),
    description: properties.description.rich_text[0]?.plain_text,
    image: properties.image.files[0],
    views: properties.views.number,
    created_time,
    last_edited_time,
  };
  return page;
};

const getBlocks = async (blockId: string) => {
  const blocks = [];
  let cursor;
  while (true) {
    const response: ListBlockChildrenResponse =
      await notion.blocks.children.list({
        start_cursor: cursor,
        block_id: blockId,
      });
    const { results, next_cursor } = response;
    blocks.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  return blocks;
};

const updateViews = async (pageId: string, views: number) => {
  const response = await notion.pages.update({
    page_id: pageId,
    properties: {
      views: views++,
    },
  });

  return response;
};

export { getPostList, updateViews, getPage, getBlocks };
