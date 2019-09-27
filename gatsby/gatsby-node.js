const path = require(`path`)
const crypto = require("crypto")
const matter = require('gray-matter');
var fs = require('fs-extra')

const calculateSlug = (node, getNode) => {
  const fileName = getNode(node.parent).name
  if (node.frontmatter.permalink) {
    return node.frontmatter.permalink
      .replace(":basename", fileName)
      .replace("docs", "")
      .replace(/.$/, "")
  }

  if (fileName === undefined) {
    return `${fileName}`
  }

  if (getNode(node.parent).absolutePath.includes("changelogs")) {
    const split = fileName.split('-');
    return `changelog/${split[0]}/${split[1]}`
  }

  return `${fileName}`
}

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type Mdx implements Node {
      fileInfo: File @link(from: "parent")
    }
  `)
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // MDX content
  if (node.internal.type === `Mdx`) {
    const slug = calculateSlug(node, getNode)
    createNodeField({
      name: `slug`,
      node,
      value: slug
    })  
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allDocs: allMdx(filter: {fileInfo: {sourceInstanceName: {eq: "content"}}}) {
        edges {
          node {
            id
            body
            fields {
              slug
            }
          }
        }
      }
    }  
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create doc pages.
    const docs = result.data.allDocs.edges
    docs.forEach(doc => {
      createPage({
        path: doc.node.fields.slug,
        component: path.resolve(`./src/templates/doc.js`),
        context: {
          slug: doc.node.fields.slug,
        },
      })
    })

  })
}
