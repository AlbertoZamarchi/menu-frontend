import {useQuery} from "@tanstack/react-query";
import { SpotService } from "@/arquivos sem pastas/spot.service";

export function useSpots() {
    return useQuery ({
        queryKey: ['spots'],
        queryFn: SpotService.listAll
    })
}