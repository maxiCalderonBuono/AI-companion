"use client"

import { ChangeEvent, FormEvent } from "react";
import { ChatRequestOptions } from "ai"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";

interface ChatFormProps {
  input: string,
  handleInputChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions | undefined) => void;
  isLoading: boolean
}

const ChatForm = ({
  input, handleInputChange, onSubmit, isLoading
}: ChatFormProps) => {
  return (
    <form onSubmit={onSubmit} className="flex items-center py-4 border-t border-primary/10 gap-x-2">
      <Input value={input} onChange={handleInputChange} disabled={isLoading} placeholder="Type a message..." className="rounded-lg bg-primary/10" />
      <Button type="submit" disabled={isLoading} variant="ghost"><SendHorizonal className="w-6 h-6" /></Button>
    </form>);
}

export default ChatForm; 