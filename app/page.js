import Link from "next/link";

export default function HomePage()
{
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">CPRG 306-D all week assignments</h1>
      <ul className="space-y-2">
        <li>
          <Link href="/week-1" className="text-blue-500 hover:underline">
            Week 1
          </Link>
        </li>
        <li>
          <Link
            href="https://cprg-306-assignments-ljw43q2g6-yashpandya10s-projects.vercel.app"
            className="text-blue-500 hover:underline"
          >
            Week 2
          </Link>
        </li>
        <li>
          <Link href="/week-3" className="text-blue-500 hover:underline">
            Week 3
          </Link>
        </li>
      </ul>
    </main>
  );
}
