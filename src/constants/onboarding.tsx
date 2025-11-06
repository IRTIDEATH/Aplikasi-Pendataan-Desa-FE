import { ScrollText, UserRoundPen } from "lucide-react";
import type { CardOnboarding } from "@/types/onboarding";

export const cardOnboarding: CardOnboarding[] = [
  {
    icon: <UserRoundPen className="text-nord-5" size={38} />,
    title: "Buat profil Warga",
    description: "Pertama buat profil Warga Anda disini.",
    link: "/onboarding/warga",
  },
  {
    icon: <ScrollText className="text-nord-5" size={38} />,
    title: "Buat profil Registrasi",
    description:
      "Jika Anda sudah membuat profil Warga, selanjutnya silahkan buat profil registrasi Anda.",
    link: "/onboarding/registrasi",
  },
];
