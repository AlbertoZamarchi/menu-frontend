import { api } from "@/lib/axios";
import { CategoryDTO } from "../dto/category.dto";

const ENDPOIT = "/categories";

export const CategoryService = {
  listAll(): Promese<CategoryDTO[]> {
    const result = await api.get<CreateCategoryDto[]>(ENDPOIT);
    return result.data
  },
  async findOne(): Promise<CategoryDTO[]> {
    const result = await api.get<CategoryDTO>(`${ENDPOINT}/${id}`);
    return result.data
}