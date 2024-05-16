"use client";

import * as React from "react";

import { Button } from "../Button/button_Variants_shop";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex items-center justify-between px-2"
          variant="outline"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7.24976C3 6.83554 3.33579 6.49976 3.75 6.49976H20.25C20.6642 6.49976 21 6.83554 21 7.24976C21 7.66397 20.6642 7.99976 20.25 7.99976H3.75C3.33579 7.99976 3 7.66397 3 7.24976Z"
              fill="black"
            />
            <path
              d="M6 11.9997C6 11.5855 6.33579 11.2497 6.75 11.2497H17.25C17.6642 11.2497 18 11.5855 18 11.9997C18 12.4139 17.6642 12.7497 17.25 12.7497H6.75C6.33579 12.7497 6 12.4139 6 11.9997Z"
              fill="black"
            />
            <path
              d="M9.75 15.9998C9.33579 15.9998 9 16.3355 9 16.7498C9 17.164 9.33579 17.4998 9.75 17.4998H14.25C14.6642 17.4998 15 17.164 15 16.7498C15 16.3355 14.6642 15.9998 14.25 15.9998H9.75Z"
              fill="black"
            />
          </svg>
          Filtro
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[160px] bg-white">
        <DropdownMenuLabel>Fitrar por</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Todos
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Mas vendidos
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Mas destacados
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
        >
          Favoritos
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
