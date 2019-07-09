import React from 'react';
import Helmet from 'react-helmet';
import { Bio, SiteMetadata } from '../utils/entities';

interface SeoProps {
  title?: string;
  description?: string;
  site?: {
    siteMetadata: SiteMetadata;
  };
  bio?: Bio;
}

export const Seo = (props: SeoProps) => {
  const { title, site, bio } = props;

  if (!(site && bio)) return null;

  return (
    <Helmet
      title={title || site.siteMetadata.title}
      meta={[
        { name: 'description', content: site.siteMetadata.description },
        { name: 'og:title', content: site.siteMetadata.title },
        { name: 'og:description', content: site.siteMetadata.description },
        { name: 'og:type', content: 'website' },
        { name: 'og:image', content: site.siteMetadata.siteUrl + bio.avatar.childImageSharp.fixed.src },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:creator', content: bio.name },
        { name: 'twitter:title', content: title || site.siteMetadata.title },
        { name: 'twitter:description', content: site.siteMetadata.description },
      ]}
    />
  );
};