"use client";

import { Menu, UserRound, UserRoundCog } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import type { CurrentUser } from "@/types/account";

type Props = {
  currentUser: CurrentUser;
};

const ProfileMenu = ({ currentUser }: Props) => {
  return (
    <div className="flex items-center gap-4 h-5">
      <span className="text-nord-6">{currentUser.user.name}</span>
      <Separator orientation="vertical" />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="size-10">
            <AvatarFallback className="border-ring border-2 overflow-hidden">
              <UserRound className="text-nord-6 mt-2" size={36} />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel className="flex items-center gap-2">
            <Menu size={16} />
            Menu
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/profile">
              <UserRoundCog size={16} />
              Halaman Profil
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileMenu;
