"use client"
import { createProduct } from '@/app/api/_actions'
import { UploadDropzone } from '@/app/lib/uploadthing'
import { productSchema, productSchemaType } from '@/app/lib/zodSchemas'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { Box, ChevronLeft, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
 
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
 
 

function CreateProduct() {
  const { register, handleSubmit, reset,formState: { errors }, setValue, getValues, control } = useForm<productSchemaType>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      isFeatured: false,
      status: "draft",
      category: "kids",
      images:[]
    }
  });


  

  const [ imagesURLs, setImagesURLs ] = useState<string[]>([]);
 
  const handleDeleteImage = (index: number) => {
    setImagesURLs(imagesURLs.filter((_, idx) => idx !== index ))
    setValue('images', getValues("images").filter((_, idx) => idx !== index ))
  }

   
  
  const submit: SubmitHandler<productSchemaType> = async (data) => {
    // console.log("name",getValues("name"))
    // console.log("description",getValues("description"))
    // console.log("price",getValues("price"))
    // console.log("isFeatured",getValues("isFeatured"))
    // console.log("images",getValues("images"))
    // console.log("status",getValues("status"))
    // console.log("images",getValues("category"))
    await createProduct(data);
  }; 
 

  return (
    <> 
    <form action='submit' onSubmit={handleSubmit(submit)}>
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
                <Label htmlFor='name' className='text-xl'>Name</Label>
                <Input id="name" type='text' className='w-full' placeholder='Product Name' {...register('name')}/>
                { errors.name && (<div className='text-md text-red-500'>* {errors.name.message}</div>)}
              </div>

              <div className='flex flex-col gap-3 mt-5'>
                <Label htmlFor='description' className='text-xl'>Description</Label>
                <Textarea id='description' className='w-full' placeholder='Detailed Product Description' {...register('description')} />
                { errors.description && (<div className='text-md text-red-500'>* {errors.description.message}</div>)}
              </div>

              <div className='flex flex-col gap-3 mt-5'>
                <Label htmlFor='price' className='text-xl'>Price (in cents)</Label>
                <Input id='price' type='number' className='w-full' {...register('price')} />
                { errors.price && (<div className='text-md text-red-500'>* {errors.price.message}</div>)}
              </div>

              <div className='flex flex-col gap-3 mt-5'>
                <Label htmlFor='isFeatured' className='text-xl'>Featured product</Label>
                <Switch id='isFeatured' defaultChecked={false} onCheckedChange={() => setValue("isFeatured", !getValues("isFeatured"))} />
                { errors.isFeatured && (<div className='text-md text-red-500'>* {errors.isFeatured.message}</div>)}
              </div>

              <div className='flex flex-col gap-3 mt-5'>
                <Label htmlFor='category' className='text-xl'>Category</Label>
                <Select defaultOpen onValueChange={(value: productSchemaType['category'])=> setValue("category", value) } >
                  <SelectTrigger>
                    <SelectValue placeholder='Select Status' />
                  </SelectTrigger>
                  <SelectContent  id="category" defaultValue='draft'>
                    <SelectItem  value='man'>Man</SelectItem>
                    <SelectItem value='women'>Women</SelectItem>
                    <SelectItem value='kids'>Kids</SelectItem>
                  </SelectContent>
                </Select>
                { errors.category && (<div className='text-md text-red-500'>* {errors.category.message}</div>)}
              </div>

              <div className='flex flex-col gap-3 mt-5'>
                <Label htmlFor='status' className='text-xl'>Status</Label>
                <Select defaultOpen  onValueChange={(value: productSchemaType['status'])=> setValue("status", value) } >
                  <SelectTrigger>
                    <SelectValue placeholder='Select Status' />
                  </SelectTrigger>
                  <SelectContent  id="status" defaultValue='draft'>
                    <SelectItem  value='draft'>Draft</SelectItem>
                    <SelectItem value='published'>Published</SelectItem>
                    <SelectItem value='archived'>Archived</SelectItem>
                  </SelectContent>
                </Select>
                { errors.status && (<div className='text-md text-red-500'>* {errors.status.message}</div>)}
              </div>

              <div className='flex flex-col gap-3 mt-5'>
                <Label htmlFor='images' className='text-xl'>Images</Label>
                <div className='flex flex-row gap-3'>
                  { 
                  imagesURLs.length > 0 && imagesURLs.map((url, index) => {
                    setValue("images",imagesURLs)
                    
                    return (
                    <div key={index} className='relative w-[100px] h-[100px]'>
                      <Image height={100} width={100} src={url} alt={"Product Image"} className='w-full h-full object-cover rounded-lg border' />
                      <button 
                        onClick={() => handleDeleteImage(index)}
                        className='absolute -top-3 -right-3 bg-red-500 text-white rounded-lg p-2'>
                        <XIcon className='h-4 w-4'/>
                      </button>
                    </div>)
                  })
                    
                }
                
                </div>
                <input hidden id='images' {...register('images')} value={imagesURLs} />
                { errors.images && (<div className='text-md text-red-500'>* {errors.images.message}</div>)}
                 
                <UploadDropzone 
                  className='bg-yellow-300'
                  endpoint='imageUploader'
                  onClientUploadComplete={(res) => {
                    const newUrls = res.map(r => r.url);
                     setImagesURLs([...imagesURLs, ...newUrls]); 
                  }}
                  onUploadError={(e) => console.log(e.message)}/>
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <Button type='submit'> 
              <Box className='mr-2'/>
              Create Product
            </Button>
          </CardFooter>
        </Card>
        
    </form>
    </>
  )
}

export default CreateProduct