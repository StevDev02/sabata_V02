import { Label } from "@/components/ui/label"
import { Switch } from "./switch_variants_shop"

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Solo productos</Label>
    </div>
  )
}
