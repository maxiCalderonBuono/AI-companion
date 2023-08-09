import prismaDb from "@/lib/prismadb"
import CompanionForm from "./components/companion-form"
import { auth, redirectToSignIn } from "@clerk/nextjs"




type CompanionIdProps = {
  params: { companionId: string }
}

const CompanioIdPage = async ({ params }: CompanionIdProps) => {

  const { userId } = auth()

  if (!userId) return redirectToSignIn()



  const companion = await prismaDb.companion.findUnique({
    where: {
      id: params.companionId,
      userId
    }
  })

  const categories = await prismaDb.category.findMany()


  return (
    <CompanionForm initialData={companion} categories={categories} />
  )
}

export default CompanioIdPage