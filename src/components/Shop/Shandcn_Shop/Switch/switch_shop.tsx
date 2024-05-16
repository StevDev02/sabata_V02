import { Label } from "@/components/ui/label"
import { Switch } from "./switch_variants_filter"

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Solo tendencias</Label>
    </div>
  )
}
