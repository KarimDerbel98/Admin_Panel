import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button variant="default" asChild>
        <Link href="/dashboard">
          Admin Panel
          <ArrowRightIcon className="ml-2" />
        </Link>
      </Button>
    </div>
  );
}
