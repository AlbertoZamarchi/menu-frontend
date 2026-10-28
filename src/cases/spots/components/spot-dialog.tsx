
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { useSpots } from "../hooks/use-hook"

export function SpotDialog({
  open
}: SpotDialogProps) {

  const { data: spots = [] } = useSpots();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Selecionar mesa</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Selecione a sua mesa</DialogTitle>
          <DialogDescription>
            Escolha a mesa em que você está para fazer o pedido.
          </DialogDescription>
        </DialogHeader>

        <div className="min-h-0 overflow-y-auto">
          <div className="grid grid-cols-3 gap-3">
            {spots.map((spot) => (
              <Button
                key={spot.id}
                variant="outline"
                className="h-auto min-h-20 flex-col p-4"
              >
                <MapPin className="size-6" />
                Mesa {spot.id}
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
