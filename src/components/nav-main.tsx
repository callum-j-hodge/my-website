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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return;
    }

    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

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

    navigate("/");

    setTimeout(() => {
      scrollToSection(item.sectionId!);
    }, 300);
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
