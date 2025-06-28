import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <Layout>
      <Component {...pageProps} user={user} loading={loading} />
    </Layout>
  );
}