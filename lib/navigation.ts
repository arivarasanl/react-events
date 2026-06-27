export type NavItem = {
  label: string
  href: string
}

export const primaryNav: NavItem[] = [
  { label: "Categories", href: "/categories" },
  { label: "Brands",     href: "/brands" },
  { label: "Products",   href: "/products" },
  { label: "Programs",   href: "/programs" },
]

export const leftNav: NavItem[] = [
  { label: "Categories", href: "/categories" },
  { label: "Brands",     href: "/brands" },
]

export const rightNav: NavItem[] = [
  { label: "Products", href: "/products" },
  { label: "Programs", href: "/programs" },
]

export const guestNav: NavItem[] = [
  { label: "Sign In",        href: "/sign-in" },
  { label: "Create Account", href: "/sign-up" },
]

export const authenticatedNav: NavItem[] = [
  { label: "My Dashboard",      href: "/dashboard" },
  { label: "Correspondence",    href: "/dashboard/correspondence" },
  { label: "Profile",           href: "/dashboard/profile" },
  { label: "Newsletter",        href: "/dashboard/newsletter" },
  { label: "Settings",          href: "/dashboard/settings" },
  { label: "Sign Out",          href: "/sign-out" },
]
