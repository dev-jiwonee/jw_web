import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getNotionData() {
  if (!process.env.NOTION_DATABASE_ID) {
    throw new Error("❌ NOTION_DATABASE_ID가 설정되지 않았습니다.");
  }

  const res = await notion.dataSources.query({
    data_source_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "type",
      multi_select: {
        contains: "개발",
      },
    },
    sorts: [
      {
        property: "sort",
        direction: "descending",
      },
    ],
  });

  const items = res.results.map((page: any) => {
    const props = page.properties;
    return {
      id: page.id,
      title: props.title?.title[0]?.plain_text,
      desc: props.description?.rich_text[0]?.plain_text,
      period: props.period?.rich_text[0]?.plain_text,
      skill: props.skill.multi_select.map((sk: any) => sk.name),
      url: page.url,
    };
  });

  return items;
}
