import { Label } from "@/components/ui/label"
import { Switch } from "./switch_variants_filter"

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
        <Switch id="hot_products" />
        <Label>Solo tendencias</Label>
    </div>
  )
}
