import Link from 'next/link'
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
        href: "dashboard/orders"
    },
    {
        name: "Products",
        href: "dashboard/products"
    },  
    {
        name: "Categories",
        href: "/dashboard/categories"
    }
]

function DashboardNavigation() {
  return (
    <>
    {
        links.map((link: INavLink) => (
            <Link key={link.href} href={link.href}>
                {link.name}
            </Link>
        ))
    }
    </>
  )
}

export default DashboardNavigation