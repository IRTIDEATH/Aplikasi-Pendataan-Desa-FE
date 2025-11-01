import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-dvh items-center justify-center pt-16 md:pb-16 md:pt-0">
      <div className="inner relative px-4 md:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center md:space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-nord6">
            Sistem informasi pengelolaan data Desa
          </h1>

          <p className="mx-auto max-w-lg lg:text-2xl text-nord4">
            Masuk & lakukan pendataan
          </p>

          <Button
            size={"wrapper"}
            className="rounded-lg bg-primary p-1 text-primary-foreground cursor-pointer hover:scale-110 will-change-transform duration-200 active:scale-100"
          >
            <span className="flex items-center gap-2 rounded-md bg-primary-layer px-4 py-1.5">
              <ChevronRight className="size-4 bg-primary rounded-full text-nord6" />
              Onboarding
            </span>
          </Button>
        </div>
      </div>
    </main>
  );
}
