import Image from "next/image";
import logo from "@/public/CIS_LOGO.svg";

export default function UnderMaint() {
  return (
    <main className="grid h-screen place-items-center">
      <div className="container mx-auto my-0 flex w-3/4 flex-col items-center gap-2 rounded-2xl bg-slate-300 p-5 text-center text-stone-500 md:w-1/2 lg:w-1/3">
        <Image src={logo} alt="Logo" className="mx-auto w-2/3 pb-2" />
        <h1 className="font-russo">Site is currently under maintenance...</h1>
        <p className="font-poppins">
          If you have any questions, please reach out to:
          <br />
          cisworkmail1@gmail.com
        </p>
        <p className="font-poppins font-bold text-stone-500">Thank you!</p>
      </div>
    </main>
  );
}
