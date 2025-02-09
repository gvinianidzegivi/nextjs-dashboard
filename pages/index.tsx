import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { bebasNeueRegular } from "@/ui/fonts";

export default function Home() {
  return (
    <main className="fl">
      <h1 className={bebasNeueRegular.className}>Muhammad Ali</h1>
      <div className="grid grid-cols-4">
        <div>
          <Image
            src="https://cdn.britannica.com/41/243941-050-9D8F156E/boxer-Cassius-Clay-May-17-1962-Bronx-New-York-Muhammad-Ali.jpg"
            alt="Muhammad Ali"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <Image
            src="https://cdn.britannica.com/41/243941-050-9D8F156E/boxer-Cassius-Clay-May-17-1962-Bronx-New-York-Muhammad-Ali.jpg"
            alt="Muhammad Ali"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}
