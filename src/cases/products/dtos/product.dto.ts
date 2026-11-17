
import type { CategoryDto } from "@/cases/categories/dtos/category.dto";

export interface ProductDTO {
  id: string;
  name: string;
  active: boolean;
  description?: string;
  price: number;
  picture?: string;
  category?: CategoryDto | null;
}
