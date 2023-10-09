import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center py-28">
      <Link className="underline" href="./test">
        Review test
      </Link>
      <h1>Name: Julio Alejandro Santana Baranda</h1>
    </div>
  );
}
