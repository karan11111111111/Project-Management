import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "@/Redux/Auth/Action";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";

const Login = () => {
  const dispatch = useDispatch();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(login(data)); // Assuming login action handles the API call
    console.log("Login data", data);
  };

  return (
    <div className="max-w-md mx-auto p-5 border border-rose-700 bg-dark-100 text-rose-50 rounded-md shadow-8xl">
      <h1 className="text-3xl font-semibold text-center text-rose-100 mb-6">Login</h1>
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
                    className="border w-full border-gray-600 py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 bg-gray-700 text-white placeholder-gray-400"
                    placeholder="user@gmail.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    className="border w-full border-gray-600 py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 bg-gray-700 text-white placeholder-gray-400"
                    placeholder="******"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full py-3 text-lg bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors duration-300"
          >
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
