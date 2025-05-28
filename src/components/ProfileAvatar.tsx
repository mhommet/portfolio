import React from "react";
import { t } from "@/i18n";

const ProfileAvatar: React.FC = () => {
  return (
    <div className="relative h-64 w-64 sm:h-80 sm:w-80 overflow-hidden rounded-full">
      <img
        src="/profile.png"
        alt={t("hero.job_title")}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default ProfileAvatar;
