"use client";

import { type ChangeEvent, useState } from "react";

export default function CommentArea() {
  const commentMaxLength = 500;

  const [comment, setComment] = useState("");
  const [remainingCharacters, setRemainingCharacters] =
    useState(commentMaxLength);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
    setRemainingCharacters(commentMaxLength - e.target.value.length);
  };

  return (
    <label className="w-full flex flex-col gap-2">
      Comment
      <textarea
        className="field-sizing-content"
        maxLength={commentMaxLength}
        required
        value={comment}
        onChange={handleChange}
      />
      <small>{`${remainingCharacters}/${commentMaxLength}`}</small>
    </label>
  );
}
