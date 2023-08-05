import { SearchImput } from "@/components/search-input"



type Props = {}

function RootPage({ }: Props) {
  return (
    <section className="h-full p-4 space-y-2">
      <SearchImput />
    </section>
  )
}

export default RootPage