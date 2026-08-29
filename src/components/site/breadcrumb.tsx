import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Visible breadcrumb navigation — rendered on all non-home pages.
 * Pairs with the BreadcrumbList JSON-LD schema injected on the same page.
 * The visible text here must match the schema text exactly.
 */
export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`mb-6 flex items-center gap-1.5 text-xs text-muted-foreground ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-1.5" itemScope itemType="https://schema.org/BreadcrumbList">
        <li className="flex items-center gap-1.5" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
            itemProp="item"
          >
            <Home className="h-3 w-3" />
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
          {items.length > 0 && (
            <ChevronRight className="h-3 w-3 flex-shrink-0 text-muted-foreground/50" />
          )}
        </li>

        {items.map((item, index) => {
          const position = index + 2; // Home is position 1
          const isLast = index === items.length - 1;
          return (
            <li
              key={item.label}
              className="flex items-center gap-1.5"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {item.href && !isLast ? (
                <Link
                  to={item.href as any}
                  className="text-muted-foreground transition-colors hover:text-primary"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span
                  className={isLast ? "font-medium text-foreground" : "text-muted-foreground"}
                  itemProp="name"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={String(position)} />
              {!isLast && (
                <ChevronRight className="h-3 w-3 flex-shrink-0 text-muted-foreground/50" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
