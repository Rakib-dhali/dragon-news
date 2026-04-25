import NewsMarquee from "@/components/Marquee"
import Navbar from "@/components/Navbar"
import CategoryList from "@/components/CategoryList"

type Category = {
  category_id: number
  category_name: string
}

async function fetchCategories(): Promise<Category[]> {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
    { cache: "no-store" }
  )

  const data = await res.json()
  return data.data.news_category
}

const Page = async () => {
  const categories = await fetchCategories()

  return (
    <div className="max-w-285 mx-auto py-5">
      <div className="flex rounded-lg bg-[#f3f3f3] p-3 gap-5">
        <div className="bg-red-500 text-white font-bold px-5 py-2">
          latest
        </div>
        <NewsMarquee />
      </div>

      <Navbar />

      <div className="grid grid-cols-4 gap-5">
        <div>
          {/* 👇 pass data to client component */}
          <CategoryList categories={categories} />
        </div>

        <div className="lg:col-span-2">2</div>
        <div>3</div>
      </div>
    </div>
  )
}

export default Page