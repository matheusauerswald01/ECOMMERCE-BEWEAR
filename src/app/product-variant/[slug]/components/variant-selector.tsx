import { productVariantTable } from "@/db/schema";
import Link from "next/link";
import Image from "next/image";

interface VariantSelectorProps {
  variants: (typeof productVariantTable.$inferSelect)[];
}
const VariantSelector = ({ variants }: VariantSelectorProps) => {
  return (
    <div className="item-center flex gap-4">
      {variants.map((variant) => (
        <Link href={`/product-variant/${variant.slug}`} key={variant.id}>
          <Image
            width={70}
            height={70}
            src={variant.imageUrl}
            alt={variant.name}
            className="rounded-xl"
          />
        </Link>
      ))}
    </div>
  );
};

export default VariantSelector;
