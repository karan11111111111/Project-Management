import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useDispatch } from "react-redux";
import { createComment } from "@/Redux/Comment/Action";

const CreateCommentForm = ({ issueId }) => {
  const dispatch = useDispatch()
  const form = useForm({
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(createComment({content: data.content,issueId}))
    console.log("Comment content:", data.content,issueId);
    // Handle submitting the comment (e.g., sending to backend)
  };

  return (
    <Form {...form}>
      <form className="flex gap-2 items-start" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>K</AvatarFallback>
                </Avatar>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="w-full bg-rose-900 text-rose-100 border border-gray-700 py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400"
                    placeholder="Add a comment..."
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-rose-500 text-white px-4 py-3 rounded-md hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-400">
          Comment
        </Button>
      </form>
    </Form>
  );
};

export default CreateCommentForm;
