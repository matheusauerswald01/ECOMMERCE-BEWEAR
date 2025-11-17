import { db } from "@/db";
import { eq } from "drizzle-orm";
import { productVariantTable } from "@/db/schema";
import { notFound } from "next/navigation";
import { Header } from "@/components/common/header";
import Image from "next/image";
import { formatCentsToBRL } from "@/app/helpers/money";
import { Button } from "@/components/ui/button";
import { productTable } from "@/db/schema";
import ProductList from "@/components/common/product-list";
import Footer from "@/components/common/footer";
import VariantSelector from "./components/variant-selector";
interface ProductVariantPageProps {
  params: Promise<{ slug: string }>;
}

const ProductVariantPage = async ({ params }: ProductVariantPageProps) => {
  const { slug } = await params;
  const productVariant = await db.query.productVariantTable.findFirst({
    where: eq(productVariantTable.slug, slug),
    with: {
      product: {
        with: {
          variants: true,
        },
      },
    },
  });
  if (!productVariant) {
    notFound();
  }
  const likelyProducts = await db.query.productTable.findMany({
    where: eq(productTable.categoryId, productVariant.product.categoryId),
    with: {
      variants: true,
    },
  });

  return (
    <>
      <Header />
      <div className="flex flex-col space-y-6">
        <div className="relative h-[380px] w-full rounded-3xl">
          <Image
            src={productVariant.imageUrl}
            alt={productVariant.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="px-5">
          {/*VARIANTES*/}
          <VariantSelector variants={productVariant.product.variants} />
        </div>
        <div className="px-5">
          <h2 className="text-lg font-semibold">
            {productVariant.product.name}
          </h2>
          <h3 className="text-muted-foreground text-sm">
            {productVariant.name}
          </h3>
          <h3 className="text-lg font-semibold">
            {formatCentsToBRL(productVariant.priceInCents)}
          </h3>
          <div className="px-5">{/*QUANTIDADE*/}</div>

          <div className="mt-11 flex flex-col space-y-6 px-5">
            <Button className="rounded-full" variant="outline" size={"lg"}>
              Adicionar ao Carrinho
            </Button>
            <Button className="rounded-full" size={"lg"}>
              Comprar Agora
            </Button>
          </div>
          <div className="mt-5 px-5">
            <p className="text-sm">{productVariant.product.description}</p>
          </div>
          <div className="mt-6">
            <ProductList
              title="Produtos Relacionados"
              products={likelyProducts}
            />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default ProductVariantPage;
