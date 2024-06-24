import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid h-screen place-items-center">
      <div className="mx-auto grid w-1/2 place-items-center gap-3 rounded-lg bg-slate-300 px-10 py-5 text-center">
        <h2 className="font-russo text-2xl font-bold tracking-widest text-red-600">
          404
        </h2>
        <h2 className="font-poppins text-2xl font-semibold text-stone-500">
          Not Found
        </h2>
        <p className="font-poppins text-stone-500">Page Unavailable</p>
        <Link
          href="/"
          className="w-2/3 rounded-lg bg-slate-600 px-2 py-2 font-semibold text-stone-100"
        >
          Go Back
        </Link>
      </div>
    </main>
  );
}
