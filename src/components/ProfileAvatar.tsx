import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileAvatar: React.FC = () => {
  return (
    <Avatar className="h-72 w-72 border-4 border-primary/20 shadow-xl shadow-primary/10">
      <AvatarImage
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop"
        alt="Photo de profil"
        className="object-cover"
      />
      <AvatarFallback className="bg-primary/10 text-primary text-4xl font-light">
        PN
      </AvatarFallback>
    </Avatar>
  );
};

export default ProfileAvatar;
