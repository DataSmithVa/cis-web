import Link from "next/link";
import clsx from "clsx";

export default function Hero() {
  return (
    <main className="h-[34rem] w-full bg-[url('/img/hero_background.jpeg')] bg-cover bg-center bg-no-repeat">
      <div className="grid h-[34rem] items-center justify-items-center bg-slate-900 bg-opacity-50 md:justify-items-start">
        <div className="grid h-2/3 max-w-min items-center justify-items-center gap-4 rounded-lg bg-slate-200 bg-opacity-80 p-8 text-center md:ml-32">
          <h1 className="font-russo text-3xl text-slate-700">
            All Things Telecommunications
          </h1>
          <p className="text-poppins w-4/5 text-xl font-light text-slate-600">
            With a wide range of services, from Rack-N-Stack data center
            equipment installation to Fiber-to-the-Home, we have you covered on
            all things telco
          </p>
          <Link
            href="/contact"
            className={clsx(
              "rounded-full border-2 border-slate-500 bg-slate-200 px-4 py-1 font-poppins text-slate-500 hover:bg-slate-500 hover:text-slate-200 md:block",
            )}
          >
            <p className="">Contact Us</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
