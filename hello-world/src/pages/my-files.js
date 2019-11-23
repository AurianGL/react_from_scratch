import React from "react"
import { graphql } from 'gatsby'
import PandaLayout from "../components/panda-layout"

export default ({ data }) => {
  console.log(data)
  return(
    <PandaLayout>
      <div>
        <h1>my Site's files</h1>
        <table>
          <thead>
            <tr>
              <th>base</th>
              <th>accessTime</th>
              <th>size</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => 
              <tr key={node.id}>
                <td>{node.base}</td>
                <td>{node.accessTime}</td>
                <td>{node.size}</td>
                <td>{node.name}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </PandaLayout>
  )
}
export const query = graphql`
  query {
    allFile {
      edges {
        node {
          id
          base
          accessTime
          size
          name
        }
      }
    }
  }

`