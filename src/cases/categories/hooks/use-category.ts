import { useQuery } from "@tanstack/react-query";
import { categoryService } from "../services/category.service";

export function useCategories() {
    return useQuery({
        queryKey: ['categories'],
        queryFn: categoryService.listAll
    })
}

export function useCategory(id: string) {
    return useQuery({
        queryKey: ['category', id],
        queryFn: () => categoryService.findOne(id),
        enabled: !!id
    })
}