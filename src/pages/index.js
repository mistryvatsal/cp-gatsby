import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import SEO from "../components/seo"

const index = () => (
  <Layout>
    <Hero>
      <Banner
        title="Hey, We're on YouTube."
        info="Want to watch some coding tutorials? We believe that it is difficult to make difficult things easy and that is what's the motto of Coding Privacy!"
      >
        <a
          href="https://www.youtube.com/channel/UChav2OCtkA8tAVY3D7OJlcA"
          className="btn-white"
        >
          Watch Videos
        </a>
      </Banner>
    </Hero>
  </Layout>
)

export default index
