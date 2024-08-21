import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { MoreHorizontal, PlusCircle, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Products() {
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
                            <TableHead>Price</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell><User className='h-[100px] w-[100px]' /></TableCell>
                            <TableCell>CoolProduct #1</TableCell>
                            <TableCell className='text-green-600'>Active</TableCell>
                            <TableCell>$39.99</TableCell>
                            <TableCell>2024-03-15</TableCell>
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
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </>
  )
}

export default Products