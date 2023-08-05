import { UserButton } from "@clerk/nextjs"


type Props = {}

function RootPage({ }: Props) {
  return (
    <UserButton afterSignOutUrl="/" />
  )
}

export default RootPage