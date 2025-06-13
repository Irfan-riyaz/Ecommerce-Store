export default function handler(req, res) {
  if (req.method === 'POST') {
    // simulate stripe test response
    res.status(200).json({ url: '/success' });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
