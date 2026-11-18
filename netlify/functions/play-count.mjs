import { getStore } from '@netlify/blobs';

const store = getStore('lebanese-snack-challenge');

export default async (request) => {
  try {
    if (request.method === 'GET') {
      const saved = await store.get('completed-plays', { type: 'json' });
      return Response.json({ count: Number(saved?.count || 0) }, {
        headers: { 'Cache-Control': 'no-store' }
      });
    }

    if (request.method === 'POST') {
      const saved = await store.get('completed-plays', { type: 'json' });
      const count = Number(saved?.count || 0) + 1;
      await store.setJSON('completed-plays', { count });
      return Response.json({ count }, {
        headers: { 'Cache-Control': 'no-store' }
      });
    }

    return new Response('Method not allowed', { status: 405 });
  } catch (error) {
    console.error('Play counter error:', error);
    return Response.json({ error: 'Counter unavailable' }, { status: 500 });
  }
};
