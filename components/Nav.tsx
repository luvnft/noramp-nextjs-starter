"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LNE } from "./webclip.png";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdImageSearch, MdQuestionMark } from "react-icons/md";
import { BiBucket } from "react-icons/bi";
import { ModeToggle } from "./ModeToggle";

export const Nav = () => {
  const router = useRouter();

  return (
    <nav className="w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex">
            <Link href="https://mlkdriveatl5d.luvnft.com">
              <div className="flex items-center justify-center w-24">
                <LNE width={36} height={36} />
                <span className="ml-2 font-bold">LNE</span>
              </div>
            </Link>
          </div>
          <div className="sm:flex hidden">
            <Link
              className="px-3 py-3.5 rounded-md text-sm font-medium focus:outline-none hover:bg-primary-color hover:text-secondary-color"
              href="https://linktr.ee/w3bars"
            >
              @W3BARS
            </Link>

            <Link
              className="px-3 py-3.5 rounded-md text-sm font-medium focus:outline-none hover:bg-primary-color hover:text-secondary-color"
              href="https://tokenopoly.luvnft.com"
            >
              TOKENOPOLY
            </Link>
            <Link
              className="px-3 py-3.5 rounded-md text-sm font-medium focus:outline-none hover:bg-primary-color hover:text-secondary-color"
              href="https://luvgames.luvnft.com"
            >
              DISCORD
            </Link>
          </div>

          <div className="flex justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:flex">
              <div className="flex justify-end w-24">
                <ModeToggle />
              </div>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="sm:hidden" asChild>
              <Button size={"icon"} variant={"outline"}>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem
                  className="hover:cursor-pointer"
                  onClick={() => router.push("https://linktr.ee/w3bars")}
                >
                  <MdImageSearch className="mr-2" />
                  @W3BARS
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => router.push("https://tokenopoly.luvnft.com")}
                  className="hover:cursor-pointer"
                >
                  <BiBlanket className="mr-2" />
                  TOKENOPOLY
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => router.push("https://luvgames.luvnft.com")}
                  className="hover:cursor-pointer"
                >
                  <MdQuestionMark className="mr-2" />
                  DISCORD
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>
                  <ModeToggle />
                </DropdownMenuLabel>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};
