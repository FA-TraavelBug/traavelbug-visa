// app/global-error.tsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-500">Something Went Wrong</h1>
            <p className="text-gray-600 mt-4">We apologize for the inconvenience.</p>
            <button
              onClick={reset}
              className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90"
            >
              Try Again
            </button>
            <Link href="/" className="inline-block mt-6 ml-4 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white">
              Return Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}