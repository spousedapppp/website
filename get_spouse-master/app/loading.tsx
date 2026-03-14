import Image from "next/image";
import logo from "/assets/logo2.svg";
export default function Loading() {
  return (
    <div className="min-h-screen bg-primary w-full absolute top-0 left-0 z-[9999] flex-c flex-col gap-6">
      <Image src={logo} alt="Spoused" width={48} className="w-32 sm:w-48" />
      <p className="text-3xl font-bold text-white tracking-[2px]">
        Loading ...
      </p>
    </div>
  );
}
