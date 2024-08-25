import prisma from '@/app/lib/db'
import { colorSwitchByStatus } from '@/app/lib/utils/color-switch'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Product } from '@prisma/client'
import { MoreHorizontal, PlusCircle, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function Products() {
    const products = await prisma.product.findMany()
    return (
        <>
            <div className='flex items-center justify-end'>
                <Button asChild className='flex items-center gap-x-2'>
                    <Link href='/dashboard/products/create'>
                        <PlusCircle className='w-5 h-5'/>
                        <span>Create New Product</span>
                    </Link>
                </Button>
            </div>

            <Card className='mt-5'>
                <CardHeader>
                    <CardTitle>
                        Products
                    </CardTitle>
                    <CardDescription>Manage Your products and review their sales performance.</CardDescription>
                </CardHeader>

                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead >Image</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                products && products.map((product: Product, index: number) => (
                                    <TableRow key={product.id}>
                                        <TableCell><Image className='h-[100px] w-[100px]' width={100} height={100} src={product.images[0]} alt={product.name} /></TableCell>
                                        <TableCell>{product.name}</TableCell>
                                        <TableCell className={colorSwitchByStatus(product.status)}>{product.status}</TableCell>
                                        <TableCell>{product.category}</TableCell>
                                        <TableCell>${product.price/100}</TableCell>
                                        <TableCell>{product.createdAt.toLocaleDateString()}</TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button size="icon" variant="ghost">
                                                        <MoreHorizontal className='h-5 w-5'/>
                                                    </Button>
                                                </DropdownMenuTrigger>

                                                <DropdownMenuContent align='end'>
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuSeparator/>
                                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))    
                            }
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    )
}

export default Products