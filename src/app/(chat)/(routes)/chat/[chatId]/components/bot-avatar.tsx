import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const BotAvatar = ({ src }: { src: string }) => {
  return (
    <Avatar className="w-12 h-12">
      <AvatarImage src={src} />
    </Avatar>);
}

export default BotAvatar;