// import Products from "components/ProductCard";
// import { NextResponse } from "next/server";



// export async function GET(request:Request) {
//     try{
//         const allColors=await Products.findMany({
//             select:{
//                 color:true
//             }
//         })
//         return NextResponse.json(allColors)
//     }
//     catch(error){
//         console.log('error fetching allColors',error)
//         return NextResponse.error()
//     }
    
// }