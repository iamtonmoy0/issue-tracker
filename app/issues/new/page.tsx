"use client";
import { Button, TextFieldInput, TextFieldRoot } from "@radix-ui/themes";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validation.schema";
import { z } from "zod";

type IssueForm = z.infer<typeof createIssueSchema>;
const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const router = useRouter();

  return (
    <form
      className="max-w-xl pt-5 pl-5 "
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("/issues");
      })}
    >
      <TextFieldRoot>
        <TextFieldInput placeholder="Title" {...register("title")} />
      </TextFieldRoot>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />

      <Button className="">Submit Issue</Button>
    </form>
  );
};

export default NewIssuePage;
