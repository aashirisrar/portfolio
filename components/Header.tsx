"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Webhook } from "lucide-react";

export function Header() {
  return (
    <nav>
      <div className="flex items-center lg:px-40 md:px-20 px-6  mt-6 justify-between">
        <div className="text-white text-lg flex gap-2 items-center">
          <Webhook />
          <Link href="/">Aashir Israr</Link>
        </div>
        <div className="flex justify-end">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="./Aashir_Israr-Resume.pdf" legacyBehavior passHref>
                  <NavigationMenuLink
                    target="_blank"
                    className={navigationMenuTriggerStyle()}
                  >
                    Resume
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}

export default Header;
