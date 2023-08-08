import { Companion } from "@prisma/client";
import Image from "next/image";
import { Card, CardFooter, CardHeader } from "./ui/card";
import Link from "next/link";
import { MessageSquare } from "lucide-react";


interface CompanionsProps {
  data: (
    Companion & {
      _count: {
        messages: number
      }
    }
  )[]
}

const Companions = ({ data }: CompanionsProps) => {

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center pt-10 space-y-3">
        <div className="relative h-60 w-60">
          <Image
            fill
            className="grayscale"
            alt="empty"
            src="/empty.png"
          />
        </div>
        <p className="text-sm text-muted-foreground">No companions found</p>
      </div>
    )
  }

  return <section className="grid grid-cols-1 gap-2 pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7">
    {data.map(item => (<Card key={item.id} className="transition border-0 cursor-pointer bg-primary/10 rounded-xl hover:opacity-75">
      <Link href={`/chat/${item.id}`}>
        <CardHeader className="flex items-center justify-center text-center text-muted-foreground">
          <div className="relative w-32 h-32">
            <Image src={item.src} fill className="object-cover rounded-xl" alt={`Companion ${item.name}`} />
          </div>
          <p className="font-bold">{item.name}</p>
          <p className="text-xs">{item.description}</p>
        </CardHeader>
        <CardFooter className="flex items-center justify-between text-xs text-muted-foreground">
          <p className="lowercase">{item.userName}</p>
          <div className="flex items-center">
            <MessageSquare className="w-3 mr-1 -h3" />
            {item._count.messages}
          </div>
        </CardFooter>
      </Link>
    </Card>))}
  </section>;
}

export default Companions;