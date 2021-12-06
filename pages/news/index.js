/* eslint-disable @next/next/no-img-element */
import { Box, Link } from "@chakra-ui/layout";
import { Heading, Image } from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Head from "next/head";
import NextLink from "next/link";

import { client } from "../../contentClient";

const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, description, file } = node.data.target.fields;
      const mimeType = file.contentType;
      const mimeGroup = mimeType.split("/")[0];
      switch (mimeGroup) {
        case "image":
          return (
            <Image
              float="left"
              mb="12px"
              mr="24px"
              w={["100%", "50%", "300px"]}
              title={title ? title : ""}
              alt={description ? description : ""}
              src={file.url}
            />
          );
        default:
          return (
            <span style={{ backgroundColor: "red", color: "white" }}>
              {" "}
              {mimeType} embedded asset{" "}
            </span>
          );
      }
    },
  },
};

export async function getStaticProps() {
  const news = await client.getEntries({
    content_type: "news",
  });
  return {
    props: {
      news,
    },
    revalidate: 1,
  };
}

export default function NewsPage(props) {
  const { news } = props;
  return (
    <div>
      <Heading mb={4}>Новости</Heading>
      {news.items.map((item) => (
        <Box mb={4} display="inline-block" width="100%" key={item.sys.id}>
          <NextLink href={`/news/${item.fields.slug}`}>
            <Heading size="md" as={Link} color="teal.500">
              {item.fields.title}
            </Heading>
          </NextLink>
          {documentToReactComponents(item.fields.shortContent, richTextOptions)}
        </Box>
      ))}
    </div>
  );
}
