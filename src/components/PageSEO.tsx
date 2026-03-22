import { useEffect } from 'react';
import { seoConfig } from '@/lib/config';

type PageKey = keyof typeof seoConfig.seo;

interface PageSEOProps {
  page: PageKey;
}

export function PageSEO({ page }: PageSEOProps) {
  const meta = seoConfig.seo[page];

  useEffect(() => {
    if (meta?.title) {
      document.title = meta.title;
    }
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl && meta?.description) {
      descEl.setAttribute('content', meta.description);
    }
  }, [meta]);

  return null;
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": seoConfig.businessName,
    "telephone": seoConfig.phone,
    "email": seoConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": seoConfig.address.street,
      "addressLocality": seoConfig.address.city,
      "addressRegion": seoConfig.address.state,
      "postalCode": seoConfig.address.zip,
    },
    "areaServed": seoConfig.serviceArea,
    "foundingDate": seoConfig.yearEstablished,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
