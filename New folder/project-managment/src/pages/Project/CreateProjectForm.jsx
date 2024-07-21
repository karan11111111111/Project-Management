import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
import { createProject } from "@/Redux/Project/Action";

const tags = [
  "javascript", "react", "nextjs", "spring boot", "mysql", 
  "mongodb", "angular", "python", "flask", "django", "flutter", "others"
];

function CreateProjectForms() {
  const dispatch = useDispatch();

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      tags: [],
    },
  });

  const handleTagsChange = (newValue) => {
    const currentTags = form.getValues("tags");
    const updatedTags = currentTags.includes(newValue)
      ? currentTags.filter((tag) => tag !== newValue)
      : [...currentTags, newValue];

    form.setValue("tags", updatedTags);
  };

  const onSubmit = (data) => {
    dispatch(createProject(data))
      .then(() => {
        console.log("Project created successfully", data);
        // Optionally, reset form values after successful submission
        form.reset();
      })
      .catch((error) => {
        console.error("Failed to create project", error);
        // Handle error state or show user-friendly message
      });
  };

  return (
    <Form {...form}>
      <form className="space-y-5 bg-rose-dark-50 text-rose-200 p-5 rounded-md" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  className="border border-rose-700 bg-rose-dark-100 py-3 px-5 w-full rounded-md text-gray-700"
                  placeholder="Project name..."
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
                  className="border border-rose-700 bg-rose-dark-100 py-3 px-5 w-full rounded-md text-gray-700"
                  placeholder="Project description..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) => {
                    field.onChange(value);
                  }}
                >
                  <SelectTrigger className="w-full border border-rose-700 bg-rose-dark-100 text-rose-50 rounded-md">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-rose-700 border border-rose-700 rounded-md">
                    <SelectItem value="fullStack">Full Stack</SelectItem>
                    <SelectItem value="frontend">Frontend</SelectItem>
                    <SelectItem value="backend">Backend</SelectItem>
                    <SelectItem value="all">All</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select
                  value=""
                  onValueChange={handleTagsChange}
                >
                  <SelectTrigger className="w-full border border-rose-700 bg-rose-dark-100 text-rose-50 rounded-md">
                    <SelectValue placeholder="Tags" />
                  </SelectTrigger>
                  <SelectContent className="bg-rose-700 border border-rose-900 rounded-md">
                    {tags.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <div className="flex flex-wrap gap-1 mt-2">
                {field.value.map((item) => (
                  <div
                    key={item}
                    onClick={() => handleTagsChange(item)}
                    className="cursor-pointer flex rounded-full items-center border border-rose-700 bg-rose-700 text-rose-50 gap-2 px-4 py-2"
                  >
                    <span>{item}</span>
                    <Cross1Icon className="h-3 w-3" />
                  </div>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Example of conditional rendering based on user plan */}
        <Button type="submit" className="w-full my-5 bg-rose-700 text-rose-50">
          Create Project
        </Button>
        {/* Conditionally render a message based on user plan */}
        {/* <DialogClose>
          {false ? (
            <div>
              <p>
                You can create only 3 projects with the free plan. Please
                upgrade your plan.
              </p>
            </div>
          ) : (
            <Button type="submit" className="w-full my-5 bg-rose-700 text-rose-50">
              Create Project
            </Button>
          )}
        </DialogClose> */}
      </form>
    </Form>
  );
}

export default CreateProjectForms;
