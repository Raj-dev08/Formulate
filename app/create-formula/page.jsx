"use client";

import { useState , useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@/components/Form";

const CreateFormula = () => {
  const router = useRouter();
  // const { data: session} = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ formula: "", tag: "" });



  const createFormula = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/formula/new", {
        method: "POST",
        body: JSON.stringify({
          formula: post.formula,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createFormula}
    />
  );
};

export default CreateFormula;