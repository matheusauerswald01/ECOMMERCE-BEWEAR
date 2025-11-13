import Image from "next/image";

export const PartnerBrands = () => {
  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold">Marcas Parceiras</h3>
      <div className="flex w-full gap-4 overflow-x-auto bg-white px-2">
        <div className="flex min-w-[80px] items-center justify-center rounded-[24px] border-2 border-gray-200 p-4">
          <Image src={"nike.svg"} alt="Nike" width={80} height={80} />
        </div>
        <div className="flex min-w-[80px] items-center justify-center rounded-[24px] border-2 border-gray-200 p-4">
          <Image src={"adidas.svg"} alt="Adidas" width={80} height={80} />
        </div>
        <div className="flex min-w-[80px] items-center justify-center rounded-[24px] border-2 border-gray-200 p-4">
          <Image src={"puma.svg"} alt="Puma" width={80} height={80} />
        </div>
        <div className="flex min-w-[80px] items-center justify-center rounded-[24px] border-2 border-gray-200 p-4">
          <Image
            src={"newBalance.svg"}
            alt="New Balance"
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>
  );
};
