import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Error = () => {
  return (
    <Layout>
      <SEO title="404" description="Página não encontrada" />
      <main className="error-page">
        <div className="error-container">
          <h1>Ooops, Página não encontrada!</h1>
          <h1>Vida Longa e Próspera</h1>
          <Link to="/" className="btn">Voltar</Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error;
