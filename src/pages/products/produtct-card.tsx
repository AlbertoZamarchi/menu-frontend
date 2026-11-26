
import { formatCurrency } from "@/lib/format";
import type { ProductDTO } from "@/cases/products/dtos/product.dto";
import { Utensils } from "lucide-react";

type ProductCardProps = {
    product: ProductDTO;
}

export function ProductCard({
    product
}: ProductCardProps) {

    return (
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4 shadow-md">

            {/* Imagem do produto */}
            <div className="mb-4 flex h-48 w-full items-center justify-center overflow-hidden rounded-lg bg-muted">

                {product.picture ? (
                    <img
                        src={product.picture}
                        alt={product.name}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <Utensils className="size-12 text-[#B86A2C]" />
                )}

            </div>

            <div className="flex flex-1 flex-col gap-2 p-4">

                <h3 className="font-menu text-lg font-semibold uppercase leading-tight tracking-tight">
                    {product.name}
                </h3>

                {product.description && (
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                        {product.description}
                    </p>
                )}

                <span className="mt-auto font-menu text-lg font-bold text-[#B86A2C]">
                    {formatCurrency(product.price)}
                </span>

            </div>

        </div>
    );
}
