'use server'

export async function submitCommentAction() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return { success: true };
}