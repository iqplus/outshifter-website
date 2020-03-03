/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, imageProp ,urlMeta, type }) {
  const { site, ogImageDefault } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteUrl
          }
        }
        ogImageDefault: file(relativePath: {eq: "og-image.png"}) {
          childImageSharp {
            fixed(height: 630, width: 1200) {
              src
            }
          }
        }
      }
    `
  )
	const ogTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description
const ogImage = imageProp || site.siteMetadata.siteUrl.concat(ogImageDefault.childImageSharp.fixed.src);
const url = urlMeta
const metaType = type || site.siteMetadata.siteUrl
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={ogTitle +' | '}
      titleTemplate={`%s | ${'Outshifter'}`}
      meta={[
        {
          property:`og:url`,
          content: url
        },
        {
          property: `og:title`,
          content:  ogTitle
        },
        {
					name: `description`,
					content: metaDescription
        },
        {
					property: 'og:image',
					content: ogImage,
        },
				{
					property: `og:type`,
					content: metaType,
        },

        {
					property: `og:description`,
					content: metaDescription,
        },
        {
        property: `fb:app_id`,
        content: `230941004502160`
        },
				{
					name: `twitter:card`,
					content: ogImage,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:title`,
					content: ogTitle,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
				{
					name: 'twitter:image',
					content: ogImage,
				},
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  ogImage: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
