"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Typography from "@/components/ui/typography";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Logo } from "@/components/common/logo";
import { MenuIcon, X } from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Header({ className }: SidebarProps) {
  const pathname = usePathname();
  const items = [
    {
      href: "https://map.sistilli.dev/public/coding/SaaS+Boilerplate",
      title: "Book a demo",
      openInNewTab: true,
    },
    // { href: '#pricing', title: 'Features' },
    // {
    //   href: 'mailto:myemail@.com',
    //   title: 'Contact Us'
    // }
  ];

  const getHeaderItems = () => {
    return (
      <>
        {items.map((item) => {
          const selected =
            pathname === item.href || pathname.includes(item.href);
          return (
            <Link
              href={item.href}
              className="pointer block w-fit"
              target={item.openInNewTab ? "_blank" : ""}
              key={item.title}
            >
              <Typography
                variant="p"
                className={cn(selected && "text-primary")}
              >
                {item.title}
              </Typography>
            </Link>
          );
        })}
      </>
    );
  };

  // const getAuthButtons = () => (
  //   <div className="flex gap-3 items-center">
  //     <Link href="login" target="_blank">
  //       <Typography variant="p">Login</Typography>
  //     </Link>
  //     <Link href="signup" target="_blank">
  //       <Button color="ghost">
  //         <Typography variant="p">Sign Up</Typography>
  //       </Button>
  //     </Link>
  //   </div>
  // );

  return (
    <div
      className={cn(
        `flex md:h-12 h-14 items-center justify-center w-full
          border-b`,
        className
      )}
    >
      <div className="w-full max-w-[1280px] md:px-8 px-4">
        {/* Desktop */}
        <div className="flex items-center gap-x-8 w-full">
          <div className="md:flex-0 min-w-fit flex-1">
            <Logo />
          </div>
          <div className="hidden md:flex flex items-center w-full">
            <div className="flex items-center gap-x-8 flex-1">
              {getHeaderItems()}
            </div>
            {/* {getAuthButtons()} */}
          </div>
          {/* Mobile */}
          <div className="md:hidden flex gap-x-4 items-center">
            {/* {getAuthButtons()} */}
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <MenuIcon />
              </DrawerTrigger>
              <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-64 rounded-none">
                <div className="mx-auto w-full p-5">
                  <DrawerHeader>
                    <DrawerClose asChild>
                      <div className="w-full flex items-end justify-end">
                        <X />
                      </div>
                    </DrawerClose>
                  </DrawerHeader>
                  <div className="p-4 pb-0 space-y-4">{getHeaderItems()}</div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}
