import { Header } from "@/components/common/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <div className="space-y-6 px-5">
        <Image
          src="/banner-01.png"
          alt="Leve uma vida com estilo"
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-full"
        />

        <Image
          src="/banner-02.png"
          alt="Seja Autentico"
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
    </>
  );
}
