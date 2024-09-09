import Link from "next/link";
import Typography from "@/components/ui/typography";

export function Logo() {
  return (
    <Link href="/" className="pointer flex items-center">
      {/* <img src="/logo.svg" className="mr-3" /> */}
      <Typography variant="h1" className="!text-base font-medium ">
        Landingpage
      </Typography>
    </Link>
  );
}
