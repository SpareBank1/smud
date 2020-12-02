import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = (props) => (
  <Layout>
    <SEO title="SpareBank 1 [smu:d]" keywords={[`sparebank 1`, `utvikling`]} />

    <Header/>

    <section className="smud-page smud-page--1" id="page-1">
        <div>
            <h1 className="smud-h1">[smu:d]</h1>
            <p>En produktkonferanse i regi av SpareBank 1 Utvikling for hele alliansen</p>
        </div>
    </section>

    <main>
        <section className="smud-page smud-page--2" id="page-2">
            <div>
                Side 2
            </div>
        </section>

        <section className="smud-page smud-page--3" id="page-3">
            <div>
                Side 3
            </div>
        </section>
    </main>
  </Layout>
)

export default IndexPage
