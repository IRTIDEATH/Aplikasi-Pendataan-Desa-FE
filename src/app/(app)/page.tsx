import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-[80dvh] md:min-h-dvh items-center justify-center pb-16 pt-0">
      <div className="inner relative px-4 md:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center md:space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-nord-6">
            Sistem informasi pengelolaan data Desa
          </h1>

          <p className="mx-auto max-w-lg lg:text-2xl text-nord-4">
            Masuk & lakukan pendataan
          </p>

          <Button
            size={"wrapper"}
            variant={"layered"}
            asChild
            className="rounded-lg bg-primary p-1 text-primary-foreground cursor-pointer hover:scale-110 will-change-transform duration-200 active:scale-100"
          >
            <Link href="/onboarding">
              <span className="flex items-center gap-2 rounded-md bg-primary-layer px-4 py-1.5">
                <ChevronRight className="size-4 bg-primary rounded-full text-nord6" />
                Onboarding
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
