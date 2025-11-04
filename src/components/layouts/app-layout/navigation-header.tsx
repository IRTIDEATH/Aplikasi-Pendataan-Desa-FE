"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth";
import ProfileMenu from "./profile-menu";

const NavigationHeader = () => {
  const { data } = authClient.useSession();
  return (
    <header>
      <div className="container px-4 py-5 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex gap-2 items-center text-nord6">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 12C21.552 12 22.005 11.551 21.95 11.002C21.7195 8.70618 20.7021 6.56071 19.0703 4.92933C17.4386 3.29795 15.2929 2.28105 12.997 2.05101C12.447 1.99601 11.999 2.44901 11.999 3.00101V11.001C11.999 11.2662 12.1044 11.5206 12.2919 11.7081C12.4794 11.8957 12.7338 12.001 12.999 12.001L21 12Z"
                fill="#A3BE8C"
                stroke="#A3BE8C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.21 15.89C20.5738 17.3945 19.5788 18.7202 18.3119 19.7513C17.045 20.7824 15.5448 21.4874 13.9424 21.8048C12.3401 22.1221 10.6844 22.0421 9.12015 21.5718C7.55587 21.1014 6.13062 20.2551 4.96902 19.1066C3.80741 17.9582 2.94481 16.5427 2.45663 14.9839C1.96845 13.4251 1.86956 11.7705 2.1686 10.1646C2.46763 8.55877 3.15549 7.05061 4.17204 5.77202C5.18859 4.49342 6.50288 3.4833 8 2.82999"
                stroke="#ECEFF4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>{" "}
            <span className="text-lg font-semibold">IPeda</span>
          </Link>

          <div className="flex items-center">
            {data ? (
              <ProfileMenu currentUser={data} />
            ) : (
              <Button
                asChild
                size={"wrapper"}
                variant={"layered"}
                className="rounded-lg bg-primary p-1 text-primary-foreground cursor-pointer hover:scale-110 will-change-transform duration-200 active:scale-100"
              >
                <Link href="/login">
                  <span className="rounded-md bg-primary-layer px-4 py-1.5">
                    Login
                  </span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;
