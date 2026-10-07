import { useLocation, useNavigate } from "react-router";
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
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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

    // About Me always goes to the top of the homepage.
    if (item.sectionId === "about") {
      if (location.pathname === "/") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        navigate("/");

        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 300);
      }

      return;
    }

    // If already on the homepage, just scroll to the section.
    if (location.pathname === "/") {
      scrollToSection(item.sectionId);
      return;
    }

    // If on another page, return to the homepage first.
    navigate("/");

    const tryScroll = (attempt = 0) => {
      const element = document.getElementById(item.sectionId!);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        return;
      }

      if (attempt < 20) {
        requestAnimationFrame(() => tryScroll(attempt + 1));
      }
    };

    requestAnimationFrame(() => tryScroll());
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
