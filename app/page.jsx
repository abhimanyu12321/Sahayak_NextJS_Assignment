import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10  ">
      <Button asChild variant="outline" className="text-4xl p-12">
        <Link href="/products">Products</Link>
      </Button>
      <Button asChild variant="outline" className="text-4xl p-12">
        <Link href="/orders">Orders</Link>
      </Button>
    </main>
  );
}
