// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary">404</h1>
        <h2 className="text-2xl mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">The page you're looking for doesn't exist.</p>
        <Link href="/" className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90">
          Return Home
        </Link>
      </div>
    </div>
  );
}