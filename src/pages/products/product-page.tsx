
import { useCategory } from "@/cases/categories/hooks/use-category";
import { useProducts } from "@/cases/products/hooks/use-product";
import { useSearchParams } from "react-router-dom";
import { Utensils } from "lucide-react";

export function ProductPage() {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryid");

  const { data: selectedCategory } = useCategory(categoryId ?? "");

  const {
    data: products = [],
    isLoading,
    isError,
  } = useProducts();

  const filteredProducts = products.filter((product) => {
    if (!product.active) return false;

    if (!categoryId) return true;

    return product.category?.id === categoryId;
  });

  return (
    <div className="flex flex-col gap-6">
      {selectedCategory && (
        <h2 className="text-2xl font-semibold uppercase">
          {selectedCategory.name}
        </h2>
      )}

      {isLoading && (
        <p className="text-muted-foreground">
          Carregando produtos...
        </p>
      )}

      {isError && (
        <p className="text-destructive">
          Não foi possível carregar os produtos.
        </p>
      )}

      {!isLoading && !isError && filteredProducts.length === 0 && (
        <p className="text-muted-foreground">
          Nenhum produto encontrado nesta categoria.
        </p>
      )}

      {!isLoading && !isError && filteredProducts.length > 0 && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
            >
              <div className="flex h-44 items-center justify-center bg-muted/40">
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

              <div className="flex flex-col gap-3 p-5">
                <h3 className="text-xl font-bold">
                  {product.name}
                </h3>

                {product.description && (
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                )}

                <span className="text-xl font-bold text-[#B86A2C]">
                  {Number(product.price).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
