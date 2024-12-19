import Footer from "@/components/Footer";
import React from "react";
export default function Product(){
    return(
        <div>
            <div className="bg-gray-100 min-h-screen">

    
      <section className="container mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-8">
        
          <div>
            <img
              src="../Pictures/Image-31.png"
              alt="Library Stool Chair"
              className="w-full rounded shadow-md"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Library Stool Chair</h2>
            <p className="text-xl text-green-600 font-semibold">$20.00 USD</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>

            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Add To Cart
            </button>
          </div>
        </div>

    
        <section className="py-10 px-10">
        <h2 className="text-2xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="text-center">
            <img
              src="../Pictures/Image-29.png"
              alt="Dandy Chair"
              className="w-full rounded-lg mb-4"
             
            />
            <h3 className="font-bold">Library Stood Chair</h3>
            <p>$99.00</p>
          </div>
          <div className="text-center">
            <img
              src="../Pictures/Image-31.png"
              alt="Wooden Chair"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="font-bold">The Wooden Chair</h3>
            <p>$99.00</p>
          </div>
          <div className="text-center">
            <img
              src="../Pictures/Image-28.png"
              alt="Wooden Chair"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="font-bold">Library Stood Chair</h3>
            <p>$99.00</p>
          </div>
          <div className="text-center">
            <img
              src="../Pictures/Image-26.png"
              alt="Wooden Chair"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="font-bold">The Wooden Chair</h3>
            <p>$99.00</p>
          </div>
        </div>
      </section>
      </section>

      <Footer/>
    </div>
        </div>
    )
}