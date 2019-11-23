import React from 'react'
import Layout from "../components/layout"
import { Link } from "gatsby"
import Container from "../components/container"
import styles from "./about.module.css"
import { render } from 'ink'
console.log(styles)

const User = (props) => {
  return(
    <div className={styles.user}>
      <img sec={props.avatar} className={styles.avatar} alt="" />
      <div className={styles.description}>
        <h2 className={styles.username}>{props.username}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
  )
}


export default () => {
  return(
    <Layout>
      <Container>
        <div style={{ color: 'purple' }}>
          <Link to="/contact/">Contact</Link>
          <User
            username="Jane Doe"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
            excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
            <User
              username="Bob Smith"
              avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
              excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
        </div>
      </Container>
    </Layout>

  )
}