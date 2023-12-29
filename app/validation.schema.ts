import { z } from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(1, "field should not be empty").max(255),
  description: z.string().min(1, "field should not be empty"),
});
