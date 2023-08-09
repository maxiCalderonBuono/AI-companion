import prismaDb from "@/lib/prismadb";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import ChatClient from "./components/chatclient";


interface ChatPageProps {
  params: {
    chatId: string
  }
}

const ChatPage = async ({ params }: ChatPageProps) => {

  const { userId } = auth()
  if (!userId) {
    return redirectToSignIn
  }

  const companion = await prismaDb.companion.findUnique({
    where: {
      id: params.chatId
    },
    include: {
      messages: {
        orderBy: {
          createdAt: "asc"
        },
        where: {
          userId
        }
      },
      _count: {
        select: {
          messages: true
        }
      }
    }
  }
  )

  if (!companion) {
    return redirect("/")
  }


  return (<section className="h-full">
    <ChatClient companion={companion} />
  </section>);
}

export default ChatPage;