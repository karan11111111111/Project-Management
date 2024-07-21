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
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createIssue } from "@/Redux/Issue/Action";

function CreateIssueForm({status}) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const form = useForm({
    defaultValues: {
      issueName: "",
      description: "",
    },
  });

  const onSubmit = (data) => {
    data.projectId = id;
    dispatch
    (createIssue({ 
        title:data.issueName,
        description : data.description,
        projectId: id,
        status:status

     }));
   
    console.log("Create isse data", data);
  };

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="issueName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  className="border w-full border-rose-700 bg-rose-dark-50 text-gray-700 py-5 px-5"
                  placeholder="Enter Issue Name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  className="border w-full border-rose-700 bg-rose-dark-50 text-gray-700 py-5 px-5"
                  placeholder="Enter Description"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogClose>
          {false ? (
            <div>
              <p className="text-rose-200">
                You can create only 3 projects with the free plan. Please
                upgrade your plan.
              </p>
            </div>
          ) : (
            <Button
              type="submit"
              className="w-full my-5 bg-rose-600 text-rose-50"
            >
              Create Issue
            </Button>
          )}
        </DialogClose>
      </form>
    </Form>
  );
}

export default CreateIssueForm;
