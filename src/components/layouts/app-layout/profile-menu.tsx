"use client";

import type { ErrorContext } from "better-auth/react";
import { LogOut, Menu, UserRound, UserRoundCog } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
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
import { authClient } from "@/lib/auth";
import type { CurrentUser } from "@/types/account";

type Props = {
  currentUser: CurrentUser;
};

const ProfileMenu = ({ currentUser }: Props) => {
  const router = useRouter();

  async function handleSignOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          router.refresh();
          toast.success("Sampai jumpa lagi!", {
            description:
              "Terima kasih sudah menggunakan aplikasi, jangan lupa balik lagi ya 😄",
          });
        },
        onError: (ctx: ErrorContext) => {
          toast.error("Oops!", {
            description: "Pintu macet! Upaya logout gagal. Silakan coba lagi.",
          });
          console.log(ctx.error.message, "sesuatu yang salah terjadi");
        },
      },
    });
  }
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
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignOut}>
            <LogOut size={16} />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileMenu;
