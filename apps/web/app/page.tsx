import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function page() {
  return (
    <div>
      <Input placeholder="Enter your email" />
      <Button>Send</Button>
    </div>
  );
}
