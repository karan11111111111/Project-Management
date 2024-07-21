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
import { inviteToProject } from "@/Redux/Project/Action";
import { useParams } from "react-router-dom";

function InviteUserForm() {
    const dispatch = useDispatch()
    const {id} = useParams();
    const form = useForm({
        defaultValues: {
          email: "",
        },
      });
    
    const onSubmit = (data) => {
        dispatch(inviteToProject(data.email,id))
        console.log("Create project data", data.email);
    };

    return (
        <Form {...form}>
            <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="email"
                                    className="border w-full border-rose-700 bg-rose-dark-50 text-gray-700 py-5 px-5"
                                    placeholder="user@gmail.com"
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
                                You can create only 3 projects with the free plan. Please upgrade your plan.
                            </p>
                        </div>
                    ) : (
                        <Button type="submit" className="w-full my-5 bg-rose-600 text-rose-50">
                            Invite User
                        </Button>
                    )}
                </DialogClose>
            </form>
        </Form>
    )
}

export default InviteUserForm;
