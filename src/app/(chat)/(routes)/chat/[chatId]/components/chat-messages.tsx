"use client"

import { Companion } from "@prisma/client";
import ChatMessage, { ChatMessageProps } from "./chat-message";
import { ElementRef, useEffect, useRef, useState } from "react";


interface ChatMessagesProps {
  messages: ChatMessageProps[],
  isLoading: boolean,
  companion: Companion
}
const ChatMessages = ({ companion, isLoading, messages }: ChatMessagesProps) => {

  const [fakeLoading, setFakeLoading] = useState(messages.length === 0 ? true : false)

  const scrollRef = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFakeLoading(false)
    }, 1000);

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length])

  return (
    <div className="flex-1 pr-4 overflow-y-auto">
      <ChatMessage src={companion.src} role="system" content={`Hello, I'm ${companion.name}, ${companion.description}`} isLoading={fakeLoading} />
      {messages.map(message => (
        <ChatMessage role={message.role} src={companion.src} content={message.content} key={message.content} />
      ))}
      {isLoading && (
        <ChatMessage role="system" src={companion.src} isLoading />
      )}
      <div ref={scrollRef} />
    </div>);
}

export default ChatMessages;