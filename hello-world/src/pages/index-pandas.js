import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import PandaLayout from "../components/panda-layout"
import { Z_BLOCK } from "zlib"
import { node } from "prop-types"

export default ({ data }) => {
  console.log(data)
  return(
    <PandaLayout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>
          { data.allMarkdownRemark.totalCount } Posts
        </h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3 css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}>
                  {node.frontmatter.title}{" "}
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
     
      <div>
        <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
      </div>
    </PandaLayout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`