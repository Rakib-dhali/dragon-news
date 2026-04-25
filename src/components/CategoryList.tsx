"use client"

import { useState } from "react"

type Category = {
  category_id: number
  category_name: string
}

const CategoryList = ({ categories }: { categories: Category[] }) => {
  const [selectedCategory, setSelectedCategory] = useState<number>(
    categories[0]?.category_id
  )

  return (
    <div className="category">
      <h2 className="text-lg font-bold mb-3">All Category</h2>

      <ul className="flex flex-col gap-3 p-5">
        {categories.map((category) => {
          const isActive = selectedCategory === category.category_id

          return (
            <li
              key={category.category_id}
              onClick={() => setSelectedCategory(category.category_id)}
              className={`cursor-pointer px-3 py-2 rounded-md transition text-center ${
                isActive
                  ? "bg-[#e7e7e7] text-[#403F3F] font-semibold"
                  : "text-[#9f9f9f] hover:text-[#403F3F] hover:bg-[#e7e7e7]"
              }`}
            >
              {category.category_name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CategoryList