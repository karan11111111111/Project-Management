import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ProjectCard from "../Project/ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { searchProjects, fetchProjects } from "@/Redux/Project/Action";

export const tags = [
  "all",
  "react",
  "nextjs",
  "spring boot",
  "mysql",
  "mongodb",
  "angular",
  "python",
  "flask",
  "django",
  "flutter",
  "others",
];

function ProjectList() {
  const [keyword, setKeyword] = useState("");
  const { project } = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleFilterCategory = (value) => {
    if (value === "all") {
      dispatch(fetchProjects({}));
    } else {
      dispatch(fetchProjects({ category: value }));
      console.log("Category value:", value);
    }
  };

  const handleFilterTags = (value) => {
    console.log("Tag selected:", value);
    if (value === "all") {
      dispatch(fetchProjects({}));
    } else {
      dispatch(fetchProjects({ tags: value }));
      console.log("Tag value:", fetchProjects({ tags: value }));
    }
  };


  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
    dispatch(searchProjects(e.target.value));
  };



  console.log("project store", project);

  return (
    <div className="relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5">
      <section className="filterSection">
        <Card className="p-5 sticky top-10 bg-rose-dark-50 text-rose-200 border border-rose-700">
          <div className="flex justify-between lg:w-[20rem]">
            <p className="text-xl tracking-wider">Filters</p>
            <Button variant="ghost" size="icon">
              <MixerHorizontalIcon />
            </Button>
          </div>
          <CardContent className="mt-5">
            <ScrollArea className="space-y-7 h-[70vh]">
              <div>
                <h1 className="pb-3 text-rose-400 border-b border-rose-600">Category</h1>
                <div className="pt-5">
                  <RadioGroup
                    className="space-y-3 pt-5"
                    defaultValue="all"
                    onValueChange={handleFilterCategory}
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="all" id="r1" />
                      <Label htmlFor="r1">All</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="fullStack" id="r2" />
                      <Label htmlFor="r2">Fullstack</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="frontend" id="r3" />
                      <Label htmlFor="r3">Frontend</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="backend" id="r4" />
                      <Label htmlFor="r4">Backend</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="pt-9 mb-10">
                <h1 className="pb-3 text-rose-400 border-b border-rose-600">Tag</h1>
                <div className="pt-5">
                  <RadioGroup
                    className="space-y-3 pt-5"
                    defaultValue="all"
                    onValueChange={handleFilterTags}
                  >
                     {tags.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <RadioGroupItem value={item} id={`r1-${item}`} />
                        <Label htmlFor={`r1-${item}`}>{item}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </section>
      <section className="projectListSection w-full lg:w-[48rem]">
        <div className="flex gap-2 items-center p-5 justify-between">
          <div className="relative w-full">
            <Input
              onChange={handleSearchChange}
              placeholder="Search project"
              className="w-full px-9 bg-rose-dark-100 text-dark-800 border border-rose-700"
            />
            <MagnifyingGlassIcon className="absolute top-3 left-4 text-rose-500" />
            <MixerHorizontalIcon className="absolute top-3 right-4 text-rose-500" />
          </div>
        </div>
        <div className="space-y-5 min-h-[74vh]">
          {keyword
            ? project.searchProjects.map((item,index) => (
                <ProjectCard key={item.id} item={item} />
              ))
            : project.projects?.map((item) => (
                <ProjectCard key={item.id} item={item} />
              ))}
        </div>
      </section>
    </div>
  );
}

export default ProjectList;
