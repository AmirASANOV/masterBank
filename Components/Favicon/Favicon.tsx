import { useEffect } from 'react';

interface FaviconProps {
  url: string;
}
function Favicon({ url }: FaviconProps) {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = url;

  useEffect(() => {
    document.head.appendChild(link);
  }, []);

  return null;
}

export default Favicon;
