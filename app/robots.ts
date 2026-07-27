# public/robots.txt
# https://www.robotstxt.org/robotstxt.html

# Allow all search engines to crawl the site
User-agent: *
Allow: /

# Disallow sensitive and system directories
Disallow: /api/
Disallow: /_next/
Disallow: /_vercel/
Disallow: /admin/
Disallow: /dashboard/
Disallow: /private/
Disallow: /profile/
Disallow: /settings/

# Disallow JSON files
Disallow: /*.json$

# Disallow search and filter parameters
Disallow: /search?*
Disallow: /?*q=*
Disallow: /?*filter=*
Disallow: /?*sort=*

# Disallow error pages
Disallow: /404
Disallow: /500
Disallow: /error

# Crawl-delay to prevent server overload (optional)
Crawl-delay: 1

# Sitemap location
Sitemap: https://visa.traavelbug.com/sitemap.xml

# Host directive
Host: https://visa.traavelbug.com