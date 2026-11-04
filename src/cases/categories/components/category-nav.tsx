import { useCategories } from "@/cases/spots/hooks/use-category"
import { cn } from "cn"
import { Link } from "lucide-react"

export function categoryNav() {

    const { data: categories = [] } = useCategories()

    return (
        <nav className="w-full">
            <ul
            className="overflow-hidden rounded-xl border
            border-border/70 bg-transparent"

            >
                { categories.map((category) => (
                    <li
                    key={category.id}
                    className="relative"
                    >

                        <Link
                            to={`/products?categoryId=${category.id}'}

                            className={cn(
                                'relative flex w-full item-center px-5 px-5',
                                'frot-menu text-lg font-semibold uppercase tracking-tight',
                                'border-xl border border-transparent',
                                'transition-colors duration-200'
                                'hover:z-10 hover:text-[#B86A2C]'

                            )}

                        >
                            {category.icon ?(
                                <span>ICON</span>
                            )}
                        <span className="leading-tight">{category.name}</span>
                        </Link>
                      
                        
                        
                        </li>
                )) }
            </ul>
        </nav>
    )
}