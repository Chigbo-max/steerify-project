import React from 'react'
import Style from "../styles/Home.module.css"
import Features from "../components/Features"

function Home() {
  return (
    <div>
      <section className={Style.heroSection}>
        <h1>Quality Businesses. Quality Investments.</h1>
        <p>Limitless growth with Steerify—where businesses meet opportunities.</p>
        <button className={Style.cta_btn}>Get Started</button>
      </section>
      <Features/>
    </div>
  )
}

export default Home
