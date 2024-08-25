import { ProductStatus } from "@prisma/client";

export const colorSwitchByStatus = (status: ProductStatus) => {
    switch(status){
        case("draft"):
            return "text-yellow-500" 
        case("published"):
            return "text-green-500"
        case("archived"):
            return "text-red-500"
        default:
            return "text-black"
    }
}