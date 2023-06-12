import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SearchHome() {
  return (
    <div className="flex w-full items-center space-x-2">
      <Input type="text" placeholder="Search for Movie, Series, or more..." />
      <Button type="submit">Search</Button>
    </div>
  );
}
