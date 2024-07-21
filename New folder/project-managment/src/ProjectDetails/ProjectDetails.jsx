import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogClose, // Import DialogClose from your UI component library
} from "@/components/ui/dialog"; // Adjust the path as per your project structure
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import InviteUserForm from "./InviteUserForm";
import IssueList from "./IssueList";
import ChatBox from "./ChatBox";
import { fetchProjectById } from "@/Redux/Project/Action";

function ProjectDetails() {
  const dispatch = useDispatch();
  const { project } = useSelector((store) => store);
  const { id } = useParams();
  const handleProjectInvitation = () => {};

  useEffect(() => {
    dispatch(fetchProjectById(id));
    console.log(fetchProjectById("Console fetch",id));
  }, [id, dispatch]);

  return (
    <>
      <div className="mt-5 lg:px-10 bg-rose-dark-50 text-rose-200">
        <div className="lg:flex gap-5 justify-between pb-4">
          <ScrollArea className="h-screen lg:w-[69%] pr-3 px-2">
            <div className="text-rose-400 pb-10 w-full">
              <h1 className="text-lg font-semibold pb-5">
              {project.projectDetails?.name}
              </h1>
              <div className="space-y-5 pb-10">
                <p className="w-full md:max-w-lg lg:max-w-xl text-sm">
                 {project.projectDetails?.description}
                </p>

                <div className="flex">
                  <p className="w-36">Project Lead :</p>
                  <p>{project.projectDetails?.owner.fullName}</p>
                </div>
                <div className="flex">
                  <p className="w-36">Members :</p>
                  <div className="flex items-center gap-2 ">
                    {project.projectDetails?.team.map((item, index) => (
                      <Avatar className="cursor-pointer" key={index}>
                        <AvatarFallback>{item.fullName[0]}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>

                  <Dialog>
                    <DialogTrigger>
                      <DialogClose> {/* Ensure DialogClose is correctly imported */}
                        <Button
                          size="sm"
                          variant="outline"
                          className="ml-2 border-rose-600 text-rose-600"
                          onClick={handleProjectInvitation}
                        >
                          <span>Invite</span>
                          <PlusIcon className="w-4 h-4 ml-2 " />{" "}
                        </Button>
                      </DialogClose>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>Invite User</DialogHeader>
                      <InviteUserForm />
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="flex">
                  <p className="w-36">Category :</p>
                  <p>{project.projectDetails?.category}</p>
                </div>
                <div className="flex">
                  <p className="w-36">Status :</p>
                  <Badge className="bg-rose-600 text-rose-50">{project.projectDetails?.category}</Badge>
                </div>
              </div>

              <section>
                <p className="py-5 border-b border-rose-600 text-lg tracking-wider">Tasks</p>
                <div className="lg:flex md:flex gap-2 justify-between py-5">
                  <IssueList status="pending" title="Todo List" />
                  <IssueList status="In progress" title="In Progress" />
                  <IssueList status="Done" title="Done" className="mr-10" />
                </div>
              </section>
            </div>
          </ScrollArea>
          <div className="lg:w-[30%] rounded-md sticky right-5 top-10">
            <ChatBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetails;
