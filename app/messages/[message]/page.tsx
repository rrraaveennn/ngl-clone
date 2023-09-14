"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut, Sun, Moon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Message() {
  const { setTheme } = useTheme();

  return (
    <div className="min-h-screen container grid grid-rows-6 grid-cols-12">
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
      <div className="row-start-2 row-span-5 col-span-full flex justify-center items-center flex-grow-0">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Message</CardTitle>
            <CardDescription>From Anonymous</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="py-2 px-4 text-gray-300 text-semibold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              temporibus ratione quisquam harum velit quo nesciunt explicabo
              repellat. Et doloremque, distinctio aut quaerat culpa aspernatur!
              Est dolorem sequi perspiciatis quasi.
            </p>
          </CardContent>
          <CardFooter className="flex justify-end items-center pr-10">
            <Button variant="secondary" asChild>
              <Link href="/home">back</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
