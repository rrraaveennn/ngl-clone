"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, User, LogOut } from "lucide-react";
import { FaRegEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { setTheme } = useTheme();

  useEffect(() => {
    toast.success("Logged in!");
  });

  return (
    <div className="container min-h-screen w-screen grid grid-cols-12 grid-rows-6 gap-2 pb-8">
      <nav className="h-2/3 col-span-full row-span-1 flex justify-between items-center py-3 px-5">
        <div>
          <p className="text-xl text-bold">NGL</p>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="p-2">
              <User className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                {/* <Link href="#">  */}
                <LogOut className="h-4 w-4 mr-2" /> Log out
                {/* </Link> */}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      <div className="relative row-start-2 row-span-5 col-span-full grid grid-rows-6 grid-cols-4">
        <div className="col-span-full row-span-1 flex justify-center items-center p-2 sticky top-0">
          <p className="text-xl text-gray-100 text-semibold">Messages</p>
        </div>
        <section className="overflow-y-auto col-span-full row-start-2 row-span-5 mx-auto grid grid-cols-4 grid-rows-auto h-fit gap-8">
          <Link href="/messages/kdfj" className="p-5">
            <FaRegEnvelope className="h-28 w-28 transition duration-100 ease-in-out hover:scale-90 hover:text-gray-300" />
          </Link>
          {/* <div className="p-5">
            <FaRegEnvelope className="h-28 w-28 transition duration-100 ease-in-out hover:scale-90 hover:text-gray-300" />
          </div>
          <div className="p-5">
            <FaRegEnvelope className="h-28 w-28 transition duration-100 ease-in-out hover:scale-90 hover:text-gray-300" />
          </div>
          <div className="p-5">
            <FaRegEnvelope className="h-28 w-28 transition duration-100 ease-in-out hover:scale-90 hover:text-gray-300" />
          </div>
          <div className="p-5">
            <FaRegEnvelope className="h-28 w-28 transition duration-100 ease-in-out hover:scale-90 hover:text-gray-300" />
          </div>
          <div className="p-5">
            <FaRegEnvelope className="h-28 w-28 transition duration-100 ease-in-out hover:scale-90 hover:text-gray-300" />
          </div>
          <div className="p-5">
            <FaRegEnvelope className="h-28 w-28 transition duration-100 ease-in-out hover:scale-90 hover:text-gray-300" />
          </div>
          <div className="p-5">
            <FaRegEnvelope className="h-28 w-28 transition duration-100 ease-in-out hover:scale-90 hover:text-gray-300" />
          </div>
          <div className="p-5">
            <FaRegEnvelope className="h-28 w-28 transition duration-100 ease-in-out hover:scale-90 hover:text-gray-300" />
          </div>
          <div className="p-5">
            <FaRegEnvelope className="h-28 w-28 transition duration-100 ease-in-out hover:scale-90 hover:text-gray-300" />
          </div>
          <div className="p-5">
            <FaRegEnvelope className="h-28 w-28 transition duration-100 ease-in-out hover:scale-90 hover:text-gray-300" />
          </div>
          <div className="p-5">
            <FaRegEnvelope className="h-28 w-28 transition duration-100 ease-in-out hover:scale-90 hover:text-gray-300" />
          </div>
          <div className="p-5">
            <FaRegEnvelope className="h-28 w-28 transition duration-100 ease-in-out hover:scale-90 hover:text-gray-300" />
          </div>
          <div className="p-5">
            <FaRegEnvelope className="h-28 w-28 transition duration-100 ease-in-out hover:scale-90 hover:text-gray-300" />
          </div>
          <div className="p-5">
            <FaRegEnvelope className="h-28 w-28 transition duration-100 ease-in-out hover:scale-90 hover:text-gray-300" />
          </div>
          <div className="p-5">
            <FaRegEnvelope className="h-28 w-28 transition duration-100 ease-in-out hover:scale-90 hover:text-gray-300" />
          </div> */}
        </section>
      </div>
      <Toaster />
    </div>
  );
}
