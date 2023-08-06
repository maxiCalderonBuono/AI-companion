import { Companion, Category } from "@prisma/client"


"use client"


type CompanionFormProps = {
  initialData: Companion | null,
  categories: Category[]
}

const CompanionForm = ({ initialData, categories }: CompanionFormProps) => {
  return (<div>CompanionForm</div>);
}

export default CompanionForm;