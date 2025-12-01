import Link from "next/link";


export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-10 text-center">
      <div>
        <h1 className="text-7xl font-bold font-primary mb-4">404</h1>
        <p className="text-lg opacity-80 font-secondary mb-6">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-primary font-primary text-2xl text-white rounded-lg hover:opacity-80"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
