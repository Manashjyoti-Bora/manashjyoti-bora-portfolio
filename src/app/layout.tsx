import './globals.css';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata = {
  title: 'Manashjyoti Bora — Full-Stack Developer',
  description: 'First-year B.Voc IT student from Nagaon, Assam. Building production-grade web applications entirely on an Android phone. Open for internships and freelance.',
  openGraph: {
    title: 'Manashjyoti Bora — Full-Stack Developer',
    description: 'Building production-grade web applications from an Android phone.',
    url: 'https://manashjyoti-bora.vercel.app',
    siteName: 'Manashjyoti Bora',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark antialiased">
      <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} bg-ink text-cream overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Manashjyoti Bora",
              "jobTitle": "Full-Stack Developer & IT Student",
              "description": "First-year B.Voc IT student from Nagaon, Assam. Building production-grade web applications entirely on an Android phone.",
              "url": "https://manashjyoti-bora.vercel.app",
              "sameAs": [
                "https://github.com/Manashjyoti-Bora",
                "https://www.linkedin.com/in/manashjyoti-bora",
                "mailto:manashjyotibora122@gmail.com"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Self / Independent Developer"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nagaon",
                "addressRegion": "Assam",
                "addressCountry": "IN"
              },
              "knowsAbout": ["React", "Next.js", "TypeScript", "MongoDB", "UI/UX Design", "Full-Stack Development"],
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": "https://manashjyoti-bora.vercel.app/#contact"
              }
            })
          }}
        />
        <div className="grain fixed inset-0 pointer-events-none z-[9999]" />
        {children}
      </body>
    </html>
  );
}
