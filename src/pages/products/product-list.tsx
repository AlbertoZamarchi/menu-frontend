
import { useProducts } from "@/cases/products/hooks/use-product";
import { ProductCard } from "./produtct-card";

type ProductListProps = {
    categoryId?: string;
}

export function ProductList({
    categoryId
}: ProductListProps) {

    const {
        data: products = [],
        isLoading,
        isError
    } = useProducts(categoryId);

    // Estados da consulta
    if (isLoading) {
        return <p>Carregando produtos...</p>;
    }

    if (isError) {
        return <p>Erro ao carregar os produtos.</p>;
    }

    if (products.length === 0) {
        return <p>Nenhum produto encontrado.</p>;
    }

    return (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">

            {products.map((product) => (
                <li key={product.id}>
                    <ProductCard product={product} />
                </li>
            ))}

        </ul>
    );
}
