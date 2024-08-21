"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
 

interface INavLink {
    name: string,
    href: string,
}

const links: INavLink[]= [
    {
        name: "Dashboard",
        href: "/dashboard"
    },
    {
        name: "Orders",
        href: "/dashboard/orders"
    },
    {
        name: "Products",
        href: "/dashboard/products"
    },  
    {
        name: "Categories",
        href: "/dashboard/categories"
    }
]

function DashboardNavigation() {
    const pathname = usePathname();
  return (
    <>
    {
        links.map((link: INavLink) => (
            <Link key={link.href} href={link.href} className={cn(
                link.href === pathname
                ? "text-foreground" 
                : "text-muted-foreground hover:text-foreground"
            )}>
                {link.name}
            </Link>
        ))
    }
    </>
  )
}

export default DashboardNavigation