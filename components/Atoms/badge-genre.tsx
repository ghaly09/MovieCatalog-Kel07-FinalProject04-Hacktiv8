import { Badge } from "@/components/ui/badge";
import React from "react";

interface Text {
  text: string;
}

export function BadgeGenre({ text }: Text) {
  return <Badge>{text}</Badge>;
}
