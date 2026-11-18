import { formatCurrency } from "@/lib/format"
import type (ProductDTO) from "../dtos/product-dto"
import noProduct from "../assets/no-product.png"

type ProductCardProps = {
  product: ProductDTO
}

export function ProductCard({ 
    product 
    }: ProductCardProps) {
        return (
            <div className="flex flex-col items-center justify-center rounded-lg border
             border-gray-200 bg-white p-4 shadow-md">
                
                <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
                <img 
                src={product.image} alt={product.name} 
                className="mb-4 h-48 w-full object-cover"                 
                />
                </div>

                <div className="flex flex-1 flex-col gap-2 p-4">
                    <h3 className="font-menu text-lg font-semibold uppercase 
                        leading-tight tracking-tight"
                        >
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
    )
}   