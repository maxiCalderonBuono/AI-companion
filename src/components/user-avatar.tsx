"use client"

import { Avatar } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import { AvatarImage } from "@radix-ui/react-avatar";

const UserAvatar = () => {

  const { user } = useUser()
  return (
    <Avatar className="w-12 h-12">
      <AvatarImage src={user?.imageUrl} />
    </Avatar>);
}

export default UserAvatar;