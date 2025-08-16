import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen border-2 flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">NEXTJS BAVYMO</h1>
      <Link
        href="/api/users"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        View Users API
      </Link>
    </div>
  );
}