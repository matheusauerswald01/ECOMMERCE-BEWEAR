import { db } from "@/db";
import { eq } from "drizzle-orm";
import { productVariantTable } from "@/db/schema";
import { notFound } from "next/navigation";
import { Header } from "@/components/common/header";
import Image from "next/image";
import { formatCentsToBRL } from "@/app/helpers/money";

interface ProductVariantPageProps {
  params: Promise<{ slug: string }>;
}

const ProductVariantPage = async ({ params }: ProductVariantPageProps) => {
  const { slug } = await params;
  const productVariant = await db.query.productVariantTable.findMany({
    where: eq(productVariantTable.slug, slug),
    with: {
      product: true,
    },
  });
  if (!productVariant) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="flex flex-col space-y-6">
        <div className="relative h-[380px] w-full rounded-3xl">
          <Image
            src={productVariant[0].imageUrl}
            alt={productVariant[0].name}
            fill
            className="object-cover"
          />
          <div className="px-5">{/*VARIANTES*/}</div>
        </div>
        <div className="px-5">
          <h2 className="text-lg font-semibold">
            {productVariant[0].product.name}
          </h2>
          <h3 className="text-muted-foreground text-sm">
            {productVariant[0].name}
          </h3>
          <h3 className="text-lg font-semibold">
            {formatCentsToBRL(productVariant[0].priceInCents)}
          </h3>
          <div className="px-5">{/*QUANTIDADE*/}</div>
        </div>
      </div>
    </>
  );
};

export default ProductVariantPage;
