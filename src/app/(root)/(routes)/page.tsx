import Categories from "@/components/categories"
import { SearchImput } from "@/components/search-input"
import prismaDb from "@/lib/prismadb"





async function RootPage() {

  const categories = await prismaDb.category.findMany()
  return (
    <section className="h-full p-4 space-y-2">
      <SearchImput />
      <Categories data={categories} />
    </section>
  )
}

export default RootPage