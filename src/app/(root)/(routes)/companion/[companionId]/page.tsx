import prismaDb from "@/lib/prismadb"
import CompanionForm from "./components/companion-form"




type CompanionIdProps = {
  params: { companionId: string }
}

const CompanioIdPage = async ({ params }: CompanionIdProps) => {

  const companion = await prismaDb.companion.findUnique({
    where: {
      id: params.companionId
    }
  })

  const categories = await prismaDb.category.findMany()


  return (
    <CompanionForm initialData={companion} categories={categories} />
  )
}

export default CompanioIdPage