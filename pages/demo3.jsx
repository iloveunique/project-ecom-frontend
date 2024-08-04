import React from 'react'

const demo3 = () => {
  const shops = [
        {
          id: 1,
          name: "Shop A",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida velit at libero molestie, vel cursus metus malesuada. Integer a libero quis libero interdum cursus.",
          location: "123 Main Street, City A",
          image: "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
        },
        {
          id: 2,
          name: "Shop B",
          description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam aliquam nulla vel est convallis, sit amet varius odio posuere.",
          location: "456 Elm Street, City B",
          image: "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
        },
        {
          id: 3,
          name: "Shop C",
          description: "Fusce eleifend justo vel orci fermentum convallis. Proin a dolor eget sem elementum sollicitudin. Curabitur sit amet sapien volutpat, fermentum lacus nec, condimentum orci.",
          location: "789 Oak Street, City C",
          image: "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
        },
        {
          id: 4,
          name: "Shop D",
          description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam aliquam nulla vel est convallis, sit amet varius odio posuere.",
          location: "456 Elm Street, City B",
          image: "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
        },
        {
          id: 5,
          name: "Shop E",
          description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam aliquam nulla vel est convallis, sit amet varius odio posuere.",
          location: "456 Elm Street, City B",
          image: "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
        },
        {
          id: 6,
          name: "Shop F",
          description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam aliquam nulla vel est convallis, sit amet varius odio posuere.",
          location: "456 Elm Street, City B",
          image: "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
        },
        {
          id: 7,
          name: "Shop G",
          description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam aliquam nulla vel est convallis, sit amet varius odio posuere.",
          location: "456 Elm Street, City B",
          image: "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
        },
        {
          id: 8,
          name: "Shop H",
          description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam aliquam nulla vel est convallis, sit amet varius odio posuere.",
          location: "456 Elm Street, City B",
          image: "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
        },
        {
          id: 9,
          name: "Shop I",
          description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam aliquam nulla vel est convallis, sit amet varius odio posuere.",
          location: "456 Elm Street, City B",
          image: "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
        },
        {
          id: 10,
          name: "Shop J",
          description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam aliquam nulla vel est convallis, sit amet varius odio posuere.",
          location: "456 Elm Street, City B",
          image: "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
        },
        {
          id: 11,
          name: "Shop K",
          description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam aliquam nulla vel est convallis, sit amet varius odio posuere.",
          location: "456 Elm Street, City B",
          image: "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
        },
      ]
  return (
    <div className='grid md:grid-cols-3 my-2 p-2'>
    {shops?.map((item, index) => (
        <div key={index} className=" px-4 mb-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img className="w-full h-64 object-contain aspect=[2/3]" src={item.image} alt="Shop Image" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <p className="text-gray-700">{item.location}</p>
              <button type="button" className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full">Explore Products</button>
            </div>
          </div>
        </div>
      ))}
      </div>
  )
}

export default demo3
