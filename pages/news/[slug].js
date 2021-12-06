import { Image } from "@chakra-ui/image";
import { Box, Heading } from "@chakra-ui/layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Zoom from 'react-medium-image-zoom'
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
            <Zoom>
              <Image
                float="left"
                mb="12px"
                mr="24px"
                w="100%"
                maxH="400px"
                objectFit="cover"
                title={title ? title : ""}
                alt={description ? description : ""}
                src={file.url}
              />
            </Zoom>
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

export default function NewsDetails(props) {
  const {newsDetails} = props;
  return (
    <Box>
      <Heading as="h3" size="lg" mb="12px">{newsDetails.fields.title}</Heading>
      {documentToReactComponents(newsDetails.fields.content || newsDetails.fields.shortContent, richTextOptions)} 
    </Box>
  );
}

export async function getStaticPaths() {
  const news = await client.getEntries({
    content_type: 'news',
  })

  const paths = news.items.map((newsItem) => ({
    params: { slug: newsItem.fields.slug },
  }))

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const news = await client.getEntries({content_type: "news", 'fields.slug': params.slug})

  return { props: { newsDetails: news.items[0] }, revalidate: 1 }
}