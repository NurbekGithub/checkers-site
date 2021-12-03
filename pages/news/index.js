/* eslint-disable @next/next/no-img-element */
import { Box } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Head from 'next/head'
import NextLink from 'next/link'

import { client } from '../../contentClient'

const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, description, file } = node.data.target.fields;
      const mimeType = file.contentType
      const mimeGroup = mimeType.split('/')[0]
      switch (mimeGroup) {
        case 'image':
          return <img
            style={{ float: "left", clear: "both", marginRight: "20px", marginBottom: "20px", width: "30%", maxWidth: "300px" }}
            title={ title ? title : null}
            alt={description ?  description : null}
            src={file.url}
          />
        default:
          return <span style={{backgroundColor: 'red', color: 'white'}}> {mimeType} embedded asset </span>
      }
      
    },
  }
}

export async function getStaticProps() {
  const news = await client.getEntries({
    content_type: 'news',
  })
  return {
    props: {
      news
    },
  }
}

export default function NewsPage(props) {
  const { news } = props
  console.log({news})
  return (
    <div>
      <Head>
        <title>Новости</title>
      </Head>
      {news.items.map(item => (
        <Box display="inline-block" width="100%" key={item.sys.id}>
          <NextLink href={`/news/${item.fields.slug}`}>
            <Heading size="md" as="a">
              {item.fields.title}
            </Heading>
          </NextLink>
          {documentToReactComponents(item.fields.shortContent, richTextOptions)}
          <p>Click here</p>
        </Box>
      ))}
      
    </div>
  )
}
