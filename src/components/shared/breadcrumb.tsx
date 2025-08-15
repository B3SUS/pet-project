"use client";

import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Container } from "@/components/shared/Container";

export function BreadcrumbNav() {
  const pathname = usePathname();

  // Function to generate breadcrumb items from pathname
  const generateBreadcrumbs = () => {
    // Remove any query parameters
    const pathWithoutQuery = pathname.split("?")[0];

    // Split pathname into segments
    const segments = pathWithoutQuery
      .split("/")
      .filter((segment) => segment !== "");

    // Generate breadcrumb items
    const items = segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`;
      const label = segment
        // Convert kebab case or snake case to space separated string
        .replace(/[-_]/g, " ")
        // Capitalize first letter of each word
        .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

      const isLast = index === segments.length - 1;

      return {
        href,
        label,
        isLast,
      };
    });

    return items;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (pathname === "/") return null;

  return (
    <div
      className={"flex items-center bg-[#F6F6F6] text-[#71747E] py-4 text-sm"}
    >
      <Container>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="hidden sm:inline-flex">
                <Home className="h-4 w-4" />
              </BreadcrumbLink>
              <BreadcrumbLink href="/" className="sm:hidden">
                <Home className="h-4 w-4" />
              </BreadcrumbLink>
            </BreadcrumbItem>

            {breadcrumbs.length > 0 && <ChevronRight />}

            {breadcrumbs.map((item, index) => {
              const showOnMobile = index >= breadcrumbs.length - 2;

              return (
                <BreadcrumbItem
                  key={item.href}
                  className={showOnMobile ? "" : "hidden sm:inline-flex"}
                >
                  {item.isLast ? (
                    <BreadcrumbPage className={"text-black font-semibold"}>
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      href={item.href}
                      className={"font-semibold"}
                    >
                      {item.label}
                    </BreadcrumbLink>
                  )}

                  {!item.isLast && <ChevronRight />}
                </BreadcrumbItem>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </Container>
    </div>
  );
}
