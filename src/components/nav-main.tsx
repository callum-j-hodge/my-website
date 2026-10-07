import { useNavigate } from "react-router";
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
    sectionId?: string;
    icon?: LucideIcon | IconType;
  }[];
}) {
  const navigate = useNavigate();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: {
      url: string;
      sectionId?: string;
    },
  ) => {
    if (!item.sectionId) {
      return;
    }

    event.preventDefault();

    if (window.location.hash !== "#/" && window.location.hash !== "#") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(item.sectionId!)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }

    document
      .getElementById(item.sectionId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Sections</SidebarGroupLabel>

      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton tooltip={item.title} asChild>
              <a
                href={item.url}
                onClick={(event) => handleClick(event, item)}
              >
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
