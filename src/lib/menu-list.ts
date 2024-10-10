import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  PackageSearch,
  Truck,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "Users",
          active: pathname.includes("/users"),
          icon: Users,
          submenus: [
            {
              href: "/users",
              label: "All Users"
            },
            {
              href: "/users/roles",
              label: "Roles & Permissions"
            }
          ]
        },
        {
          href: "",
          label: "Products",
          active: pathname.includes("/products"),
          icon: PackageSearch,
          submenus: [
            {
              href: "/products",
              label: "All Products"
            },
            {
              href: "/products/categories",
              label: "Categories"
            },
          ]
        },
        {
          href: "/orders",
          label: "Orders",
          active: pathname.includes("/orders"),
          icon: Truck
        }
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/account",
          label: "Account",
          active: pathname.includes("/account"),
          icon: Settings
        },
        {
          href: "",
          label: "General Settings",
          active: pathname.includes("/settings"),
          icon: PackageSearch,
          submenus: [
            {
              href: "/settings/language",
              label: "Language"
            },
            {
              href: "/settings/theme",
              label: "Theme"
            },
          ]
        },
      ]
    }
  ];
}
