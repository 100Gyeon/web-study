export default function handler(req, res) {
  res.setHeader('Set-Cookie', 'a_name=Mike;Max-Age=0;HttpOnly,Secure');
  res.status(200).json({ message: 'ok' });
}
