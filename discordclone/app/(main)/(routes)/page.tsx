import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="">
      <UserButton afterSignOutUrl="/" />
      <p className="text-3xl font bold text-indigo-500">hello dicord clone</p>
      <Button variant="ghost">click me!</Button>
    </div>
  );
}
