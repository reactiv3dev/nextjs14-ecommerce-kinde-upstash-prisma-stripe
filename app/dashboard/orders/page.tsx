import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

function Orders() {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>Recent Orders from Your store!</CardDescription>
        </CardHeader>

        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead>TYPE</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>
                            <p className='font-medium'>Nicolas Paul</p>
                            <p className='hidden md:flex text-sm text-muted-foreground'>nikolareactivedev@gmail.com</p>
                        </TableCell>
                        <TableCell>Stripe/Online</TableCell>
                        <TableCell>Success</TableCell>
                        <TableCell>2024-08-20</TableCell>
                        <TableCell>$39.99</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
    </Card>
  )
}

export default Orders