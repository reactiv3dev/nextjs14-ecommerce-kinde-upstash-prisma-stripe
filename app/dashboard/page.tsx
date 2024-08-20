import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Boxes, DollarSign, ShoppingBag, User2 } from 'lucide-react';
import React from 'react'

function Dashboard() {
  return (
    <> 
      <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 '>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle>Total Revenue</CardTitle>
            <DollarSign className='h-9 w-9 text-green-600'/>
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold'>$10000</p>
            <p className='text-xs text-muted-foreground'>Based on 100 charges</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle>Total Sales</CardTitle>
            <ShoppingBag className='h-9 w-9 text-blue-600'/>
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold'>+50</p>
            <p className='text-xs text-muted-foreground'>On eCommerceLocal</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle>Total Products</CardTitle>
            <Boxes className='h-9 w-9 text-orange-300'/>
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold'>37</p>
            <p className='text-xs text-muted-foreground'>Total Products created</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle>Total Revenue</CardTitle>
            <User2 className='h-9 w-9 text-purple-600'/>
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold'>$10000</p>
            <p className='text-xs text-muted-foreground'>Total Users Signed Up</p>
          </CardContent>
        </Card>
      </div>

      <div className='grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10 '>
        <Card className='xl:col-span-2'>
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>Recent transaction of your store</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent sales</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-8'>
            <div className='flex items-center gap-4'>
              <Avatar className='hidden md:flex  h-9 w-9'>
                <AvatarFallback className='font-bold'>NP</AvatarFallback>
              </Avatar>
              <div className='grid gap-1'>
                <p className='text-sm font-medium'>Nicolas Paul</p>
                <p className='text-sm text-muted-foreground'>nikolareactivedev@gmail.com</p>
              </div>
              <p className='font-medium ml-auto'>$500.00</p>
            </div>

            <div className='flex items-center gap-4'>
              <Avatar className='hidden md:flex  h-9 w-9'>
                <AvatarFallback className='font-bold'>NP</AvatarFallback>
              </Avatar>
              <div className='grid gap-1'>
                <p className='text-sm font-medium'>Nicolas Paul</p>
                <p className='text-sm text-muted-foreground'>nikolareactivedev@gmail.com</p>
              </div>
              <p className='font-medium ml-auto'>$500.00</p>
            </div>

            <div className='flex items-center gap-4'>
              <Avatar className='hidden md:flex  h-9 w-9'>
                <AvatarFallback className='font-bold'>NP</AvatarFallback>
              </Avatar>
              <div className='grid gap-1'>
                <p className='text-sm font-medium'>Nicolas Paul</p>
                <p className='text-sm text-muted-foreground'>nikolareactivedev@gmail.com</p>
              </div>
              <p className='font-medium ml-auto'>$500.00</p>
            </div>

            <div className='flex items-center gap-4'>
              <Avatar className='hidden md:flex  h-9 w-9'>
                <AvatarFallback className='font-bold'>NP</AvatarFallback>
              </Avatar>
              <div className='grid gap-1'>
                <p className='text-sm font-medium'>Nicolas Paul</p>
                <p className='text-sm text-muted-foreground'>nikolareactivedev@gmail.com</p>
              </div>
              <p className='font-medium ml-auto'>$500.00</p>
            </div>
 
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Dashboard;