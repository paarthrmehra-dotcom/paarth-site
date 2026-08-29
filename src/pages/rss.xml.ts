import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../site.config';

const escape = (str: string) =>
  str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async (context) => {
  const base = context.site?.toString().replace(/\/$/, '') ?? '';
  const posts = (await getCollection('writing', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  const items = posts
    .map(
      (post) => `    <item>
      <title>${escape(post.data.title)}</title>
      <link>${base}/writing/${post.id}/</link>
      <guid isPermaLink="true">${base}/writing/${post.id}/</guid>
      <description>${escape(post.data.description)}</description>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
    </item>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escape(site.name)}</title>
    <link>${base}/</link>
    <description>${escape(site.description)}</description>
    <language>en</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
