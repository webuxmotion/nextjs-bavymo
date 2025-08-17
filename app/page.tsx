import { cookies } from "next/headers";
import Link from "next/link";
import Chat from "./components/Chat";

export default async function Home() {
  // Await the cookies store
  const cookieStore = await cookies();
  const personalCode = cookieStore.get("personalCode")?.value;

  if (!personalCode) {
    // Redirect to API route if cookie is missing
    return (
      <script>
        {`window.location.href='/api/personal-code'`}
      </script>
    );
  }

  return <div className="h-screen border-2 flex flex-col items-center justify-center gap-4">
    <h1 className="text-2xl font-bold">NEXTJS BAVYMO</h1>
    <div>Your personal code: {personalCode}</div>
    <Chat />
    <Link
      href="/api/users"
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      View Users API
    </Link>
  </div>;
}