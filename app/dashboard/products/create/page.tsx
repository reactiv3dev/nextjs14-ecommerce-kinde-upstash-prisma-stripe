"use client"
import { UploadDropzone } from '@/app/lib/uploadthing'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { Box, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function CreateProduct() {
  return (
    <form>
        <div className='flex items-center gap-4'>
            <Button variant="outline" size="icon" asChild>
                <Link href="/dashboard/products">
                    <ChevronLeft className='w-5 h-5' />
                </Link>
            </Button>
        </div>
        <h1 className='text-3xl font-semibold tracking-tight my-5'>New Product</h1>

        <Card>
          <CardHeader>
            <CardTitle className='text-2xl'>Product Details</CardTitle>
            <CardDescription>By filling these form-fields and confirming, You will create new product for Your shop.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-3 mt-5'>
                <Label className='text-xl'>Name</Label>
                <Input type='text' className='w-full' placeholder='Product Name' />
              </div>

              <div className='flex flex-col gap-3 mt-5'>
                <Label className='text-xl'>Description</Label>
                <Textarea className='w-full' placeholder='Detailed Product Description' />
              </div>

              <div className='flex flex-col gap-3 mt-5'>
                <Label className='text-xl'>Price (in cents)</Label>
                <Input type='number' className='w-full' placeholder='	¢000' />
              </div>

              <div className='flex flex-col gap-3 mt-5'>
                <Label className='text-xl'>Featured product</Label>
                <Switch/>
              </div>

              <div className='flex flex-col gap-3 mt-5'>
                <Label className='text-xl'>Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder='Select Status' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='draft'>Draft</SelectItem>
                    <SelectItem value='published'>Published</SelectItem>
                    <SelectItem value='archived'>Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className='flex flex-col gap-3 mt-5'>
                <Label className='text-xl'>Images</Label>
                <UploadDropzone 
                  className='bg-yellow-300'
                  endpoint='imageUploader'
                  onClientUploadComplete={(res) => console.log(res)}
                  onUploadError={(e) => console.log(e.message)}/>
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <Button>
              <Box className='mr-2'/>
              Create Product
            </Button>
          </CardFooter>
        </Card>
    </form>
  )
}

export default CreateProduct