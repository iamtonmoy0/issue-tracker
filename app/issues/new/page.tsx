"use client";

import { Button, TextFieldInput, TextFieldRoot } from "@radix-ui/themes";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl pt-5 pl-5 ">
      <TextFieldRoot>
        <TextFieldInput placeholder="Title" />
      </TextFieldRoot>
      <SimpleMDE />
      <Button className="">Submit Issue</Button>
    </div>
  );
};

export default NewIssuePage;
