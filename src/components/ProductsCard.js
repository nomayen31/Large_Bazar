import React from 'react'

const ProductsCard = ({product}) => {
  return (
    <div className="w-full relative group">
      <div className="w-full h-96 cursor-pointer overflow-hidden">
        <img  className="w-full h-full object-cover group-hover:scale-110 duration-500"src={product.image} alt="product img"></img>
      </div>
      <div className="w-full border-[1px] px-2 py-4">
          <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold">{product.title}</h2>
          </div>
          <div className='flex gap-2'>
            <p className='line-through text-gray-500'>${product.oldPrice}</p>
            <p className='font-semibold'>${product.price}</p>
          </div>
          </div>
      </div>
    </div>
  )
}

export default ProductsCard


// 1.5