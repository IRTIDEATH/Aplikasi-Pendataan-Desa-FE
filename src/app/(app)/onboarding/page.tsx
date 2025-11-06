import { ChevronDown, MoveRight } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cardOnboarding } from "@/constants/onboarding";

export default function OnboardingPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center pt-16 md:pt-0 pb-20">
      <div className="inner px-4 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl text-nord-6 text-center pb-8">
              Selamat Datang!
            </h1>

            <p className="mx-auto lg:text-2xl text-nord-5 text-center pb-6">
              Lengkapi data Anda untuk menjadi bagian dari transformasi digital
              desa. Data Anda tersimpan dengan aman di server kami.
            </p>

            <span className="pb-16 text-nord-4 flex gap-1 items-center">
              scroll <ChevronDown size={16} className="animate-bounce" />
            </span>
          </div>

          <div className="flex flex-col gap-8">
            {cardOnboarding.map((item, index) => (
              <div key={index} className="bg-primary p-1.5 rounded-2xl">
                <Card className="bg-nord-5 border-none shadow-none py-4">
                  <CardContent className="px-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0">
                      <Avatar className="size-12 rounded-lg">
                        <AvatarFallback className="bg-nord-2 overflow-hidden rounded-lg">
                          {item.icon}
                        </AvatarFallback>
                      </Avatar>
                      <CardHeader className="w-full gap-3 md:gap-2">
                        <CardTitle className="text-primary-foreground">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-primary-foreground text-[16px]">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="pt-0 px-0">
                        <Button
                          type="submit"
                          size={"icon-lg"}
                          asChild
                          className="bg-nord-2 h-11 md:py-4 rounded-lg hover:bg-nord-2 text-nord-6 w-full md:hover:scale-110 will-change-transform duration-200 active:scale-90 md:active:scale-100"
                        >
                          <Link href={item.link}>
                            <span className="block md:hidden">Mulai</span>
                            <MoveRight className="hidden md:block" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
