import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";
import IssueCard from "./IssueCard";
import CreateIssueForm from "./CreateIssueForm";
import { PlusIcon } from "@radix-ui/react-icons";

function IssueList({ title, status }) {
  return (
    <div>
      <Dialog>
        <Card className="w-full md:w-[250px] lg:w-[258px] bg-rose-900 text-rose-100 rounded-md shadow-md">
          <CardHeader className="border-b border-rose-700 pb-2">
            <CardTitle className="text-rose-300">{title}</CardTitle>
          </CardHeader>
          <CardContent className="px-2">
            <div className="space-y-2">
              {[1, 1, 1].map((item) => (
                <IssueCard key={item} />
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t border-rose-700 pt-2">
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full border border-rose-700 text-rose-300 flex items-center gap-2 hover:bg-rose-800 hover:text-rose-200"
              >
                <PlusIcon />
                Create Issue
              </Button>
            </DialogTrigger>
          </CardFooter>
        </Card>
        <DialogContent className="bg-rose-900 text-rose-100 rounded-md shadow-md">
          <DialogHeader className="border-b border-rose-700 pb-2">
            <DialogTitle className="text-rose-300">Create New Issue</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <CreateIssueForm />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default IssueList;
