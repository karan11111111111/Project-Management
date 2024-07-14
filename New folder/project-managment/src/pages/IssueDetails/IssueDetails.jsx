import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";
import CreateCommentForm from "./CreateCommentForm";
import CommentCard from "./CommentCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const IssueDetails = () => {
  const handleUpdateIssuesStatus = (status) => {
    console.log(status);
    // Handle status update
  };

  const { projectId, issueId } = useParams();

  return (
    <div className="px-20 py-8 text-gray-400">
      <div className="flex justify-between border p-10 rounded-lg bg-rose-900">
        <ScrollArea className="h-[80vh] w-[60%]">
          <div>
            <h1 className="text-lg font-semibold text-rose-100">
              Create Navbar
            </h1>
          </div>
          <div className="py-5">
            <h2 className="font-semibold text-rose-100">Description</h2>
            <p className="text-rose-100 text-sm mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              vitae!
            </p>
          </div>
          <div className="mt-5">
            <h1 className="pb-3 text-rose-100">Activity</h1>
            <Tabs defaultValue="comments" className="w-[400px]">
              <TabsList className="mb-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="comments">Comments</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                All Make changes to your account here
              </TabsContent>
              <TabsContent value="comments">
                <CreateCommentForm issueId={issueId} />
                <div className="mt-8 space-y-6">
                  {[1, 1, 1].map((item) => (
                    <CommentCard key={item} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="history">
                History change your password here
              </TabsContent>
            </Tabs>
          </div>
        </ScrollArea>

        <div className="w-full lg:w-[35%] space-y-2">
          <Select onValueChange={handleUpdateIssuesStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="To Do" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">To Do</SelectItem>
              <SelectItem value="in_progress">In progress</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectContent>
          </Select>
          <div className="border rounded-lg bg-rose-800">
            <p className="border-b py-3 px-5 text-rose-100">Details</p>
            <div className="p-5">
              <div className="space-y-7">
                <div className="flex gap-1 items-center">
                  <p className="w-[7rem] text-rose-100">Assignee</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 text-xs">
                      <AvatarFallback>K</AvatarFallback>
                    </Avatar>
                    <p className="text-rose-100">Karan Kumar Sah</p>
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  <p className="w-[7rem] text-rose-100">Labels</p>
                  <p className="text-rose-100">None</p>
                </div>
                <div className="flex gap-1 items-center">
                  <p className="w-[7rem] text-rose-100">Status</p>
                  <Badge className="bg-rose-500">In Progress</Badge>
                </div>
                <div className="flex gap-1 items-center">
                  <p className="w-[7rem] text-rose-100">Release</p>
                  <p className="text-rose-100">05-07-2024</p>
                </div>
                <div className="flex gap-1 items-center">
                  <p className="w-[7rem] text-rose-100">Reporter</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 text-xs">
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <p className="text-rose-100">Ayush Ranjan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
