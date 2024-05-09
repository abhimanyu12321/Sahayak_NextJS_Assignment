import Link from "next/link";
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10  ">
      <Link href={"/products"}>
        <h1 className="text-6xl text-blue-600 cursor-pointer hover:underline">
          Products
        </h1>
      </Link>
      <Link href={"/orders"}>
        <h1 className="text-6xl text-blue-600 cursor-pointer hover:underline">
          Orders
        </h1>
      </Link>
    </main>
  );
}
