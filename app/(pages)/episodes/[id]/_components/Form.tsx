"use client";

import { submitCommentAction } from "@/app/_actions/comment";
import { Spinner } from "@/app/_components/Spinner";
import { toast } from "@pheralb/toast";
import { useActionState, useEffect } from "react";
import CommentArea from "./CommentArea";
import Button from "@/app/_components/Button";

export default function Form() {
  const [state, formAction, pending] = useActionState(
    submitCommentAction,
    null
  );

  useEffect(() => {
    if (state?.success) {
      toast.success({ text: "Comment submitted successfully" });
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="flex flex-col items-center gap-3 max-w-lg mx-auto"
    >
      <p className="font-semibold">Write a comment about the episode</p>

      <label className="w-full flex flex-col gap-2 ">
        Name
        <input type="text" required />
      </label>

      <label className="w-full flex flex-col gap-2">
        Email
        <input type="email" required />
      </label>

      <CommentArea />
      <Button disabled={pending} variant="primary" type="submit">
        {pending ? <Spinner /> : "Submit"}
      </Button>
    </form>
  );
}
