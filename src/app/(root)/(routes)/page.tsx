import Categories from "@/components/categories"
import Companions from "@/components/companions";
import { SearchImput } from "@/components/search-input"
import prismaDb from "@/lib/prismadb"
import { useSearchParams } from 'next/navigation';

interface RootPageProps {
  searchParams: {
    categoryId: string,
    name: string
  }
}


async function RootPage({ searchParams }: RootPageProps) {


  const data = await prismaDb.companion.findMany({
    where: {
      categoryId: searchParams.categoryId,
      name: {
        search: searchParams.name
      }
    },
    orderBy: {
      createdAt: "desc"
    },
    include: {
      _count: {
        select: {
          messages: true
        }
      }
    }
  })

  const categories = await prismaDb.category.findMany()
  return (
    <section className="w-full h-full p-4 space-y-2">
      <SearchImput />
      <Categories data={categories} />
      <Companions data={data} />
    </section>
  )
}

export default RootPage