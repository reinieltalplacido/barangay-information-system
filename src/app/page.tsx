import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      {/* Hero Section */}
      <section className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Barangay Information System
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          A centralized system to manage residents, officials, and barangay records efficiently.
        </p>

        {/* Call to Action */}
        <div className="flex gap-4 justify-center">
          <Link
            href="/auth/login"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
          >
            Register
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} Barangay Information System
      </footer>
    </main>
  );
}
