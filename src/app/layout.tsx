import type { Metadata } from 'next'
import { Montserrat, Playfair_Display, Italiana } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
})
const italiana = Italiana({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-italiana',
})

export const metadata: Metadata = {
  title: 'AASTITVAA SUMMIT | Why Indian Youth Hide Their Real Dreams',
  description: "Join Aastitvaa Summit - A powerful summit exploring why Indian youth hide their real dreams from parents. Break the silence, find your voice, and embrace your true aspirations.",
  keywords: "Aastitvaa Summit, Youth Summit, Indian Youth Dreams, Parental Expectations, Career Pressure India, Youth Summit Delhi, Breaking Silence, Indian Students, Career Stereotypes, Youth Empowerment",
  authors: [{ name: 'Aastitvaa Organization' }],
  themeColor: '#8B0000',
  openGraph: {
    type: 'website',
    url: 'https://www.aastitvaasummit.com/',
    title: 'AASTITVAA SUMMIT | Why Indian Youth Hide Their Real Dreams',
    description: "A summit about silent struggles, suppressed ambitions, and the courage to speak up. Join 500+ youth breaking the silence.",
    images: 'https://placehold.co/1200x630/8B0000/FFF?text=AASTITVAA+SUMMIT',
    locale: 'en_IN',
    siteName: 'Aastitvaa Summit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AASTITVAA SUMMIT | Why Indian Youth Hide Their Real Dreams',
    description: "A summit about silent struggles, suppressed ambitions, and the courage to speak up.",
    images: 'https://placehold.co/1200x630/8B0000/FFF?text=AASTITVAA+SUMMIT',
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfairDisplay.variable} ${italiana.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
      {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "Aastitvaa Summit",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "New Delhi",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "New Delhi",
            "addressRegion": "DL",
            "addressCountry": "IN"
          }
        },
        "description": "A powerful youth summit exploring why Indian youth hide their real dreams from parents. Break the silence, find your voice.",
        "organizer": {
          "@type": "Organization",
          "name": "Aastitvaa",
          "url": "https://www.aastitvaasummit.com/"
        }
      }
    `}} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
