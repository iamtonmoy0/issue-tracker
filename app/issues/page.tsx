import { Button } from "@radix-ui/themes";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Issue Page",
};
const IssuesPage = () => {
  return (
    <div>
      <Link href="/issues/new">
        <Button>New Issue</Button>
      </Link>
    </div>
  );
};

export default IssuesPage;
