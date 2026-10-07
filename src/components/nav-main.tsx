import { ChevronLeft, type LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon | IconType;
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Sections</SidebarGroupLabel>

      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton tooltip={item.title} asChild>
              <a href={item.url}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
                <ChevronLeft className="ml-auto rotate-180" />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
