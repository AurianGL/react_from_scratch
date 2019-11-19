import React from 'react'
import Layout from "../components/layout"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => {
  return (
    <Layout>
      <div style={{ color: 'purple' }}>
        <Link to="/contact/">Contact</Link>
        <Header headerText="yeay gatsby" />
        <Header headerText="niksam" />
        <p>What a world</p>
      </div>
    </Layout>
  )
}