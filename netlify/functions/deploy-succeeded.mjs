// Runs automatically after each successful production deploy (Netlify event function).
// Tells IndexNow search engines (Bing and partners) which URLs exist, using the public key file.
const KEY = '4235f68c8eda48162f2b20a3a22dac22';
const HOST = 'digitizenstitch.com';

export const handler = async (event) => {
  const deploy = JSON.parse(event.body || '{}').payload || {};
  if (deploy.context && deploy.context !== 'production') return { statusCode: 200, body: 'skipped' };
  try {
    const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
    const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
    });
    console.log('IndexNow', res.status, urlList.length, 'urls');
  } catch (err) {
    console.error('IndexNow failed', err.message);
  }
  return { statusCode: 200, body: 'ok' };
};
