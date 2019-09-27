import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

class DocTemplate extends React.Component {

  render() {
    const node = this.props.data.mdx

    return (
      <Layout>
        <MDXProvider>
          <MDXRenderer>{node.body}</MDXRenderer>
        </MDXProvider>
        </Layout>  
    )
  }
}

export default DocTemplate

export const pageQuery = graphql`
  query DocBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      fields {
        slug
      }
    }
  }
`
