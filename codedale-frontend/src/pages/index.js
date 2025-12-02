import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CardRow from '../components/CardRow';
import FeatureGrid from '../components/FeatureGrid';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Head>
        <title>Codedale - Digital Excellence</title>
        <meta name="description" content="We transform ideas into high-performance, scalable, and stunning digital solutions." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <CardRow />
        <FeatureGrid />
      </main>

      <footer className="py-10 text-center text-gray-500 border-t border-gray-100 mt-20 text-sm">
        <p>&copy; 2025 CodeDale. All rights reserved.</p>
      </footer>
    </div>
  );
}
