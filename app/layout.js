import Layout from '../components/Layout';
import '../styles/globals.css';

export const metadata = {
  title: 'Bitar Design',
  description: 'Professional architectural and interior design services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css"
        />
      </head>
      <body className="antialiased">
        <Layout>
          {children}
        </Layout>
        <script src="/frontend.js"></script>
      </body>
    </html>
  );
}