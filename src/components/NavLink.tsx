"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkInteractProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
  href?: string;
  activeClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkInteractProps>(
  ({ className, activeClassName, to, href, ...props }, ref) => {
    // headers is filtered out because Link doesn't accept it but AnchorHTMLAttributes might have it
    const pathname = usePathname();
    const target = (to || href) as string;
    const isActive = pathname === target;

    return (
      <Link
        ref={ref}
        href={target}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
