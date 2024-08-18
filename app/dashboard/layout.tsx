import React from 'react'
import DashboardNavigation from '../components/dashboard/DashboardNavigation'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { CircleUser, MenuIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

interface IProps{
    children: React.ReactNode
}

function DashboardLayout({ children }: IProps) {
  return (
    <div className='flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <header className='sticky top-0 flex flex-row h-16 items-center justify-between gap-4 border-b bg-white'>
            <h1 className='sm:hidden'>LOGO</h1>
            <nav className='hidden font-medium md:flex md:flex-row md:items-center md:gap-5'>
                <DashboardNavigation/>
            </nav>  

             

            <Sheet>
                <SheetTrigger asChild>
                    <Button
                     className='shrink-0 md:hidden'
                     variant="outline"
                     size="icon">
                        <MenuIcon className='h-5 w-5'/>
                    </Button>
                </SheetTrigger>

                <SheetContent side="left">
                    <nav className='flex flex-col gap-6 text-lg font-medium mt-5'>
                        <DashboardNavigation/>
                    </nav>
                </SheetContent>
            </Sheet> 

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className='rounded-full'>
                        <CircleUser className='h-5 w-5'/>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align='end'>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>Log Out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
        {children}
    </div>
  )
}

export default DashboardLayout