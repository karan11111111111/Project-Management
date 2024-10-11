import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon, PersonIcon } from "@radix-ui/react-icons";
import React, { useDebugValue } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";
import CreateIssueForm from "./CreateIssueForm";
import { useDispatch } from "react-redux";
import { deleteIssue } from "@/Redux/Issue/Action";

function IssueCard({item,projectId}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleIssueDelete =() =>{
    dispatch(deleteIssue(item.id))
  }
  return (
    <div>
      <Card className="rounded-md py-1 pb-2 bg-rose-900 text-rose-100">
        <CardHeader className="py-0 pb-1">
          <div className="flex justify-between items-center">
            <CardTitle
              className="cursor-pointer text-rose-300 hover:text-rose-400"
              onClick={() => navigate(`/project/${projectId}/issue/${item.id}`)}
            >
              {item.title}
             { console.log(item.title)}
            </CardTitle>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button className="rounded-full" size="icon" variant="ghost">
                  <DotsVerticalIcon className="text-rose-300 hover:text-rose-400" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-rose-800 text-rose-300">
                <DropdownMenuItem className="hover:bg-rose-700">In progress</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-rose-700">Done</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-rose-700">Edit</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-rose-700" onClick={handleIssueDelete}>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="py-0">
          <div className="flex items-center justify-between">
            <p className="text-rose-300">Assign Issue-{item.id%1000} to</p>
            <DropdownMenu className="w-[30rem border-rose-400">
              <DropdownMenuTrigger>
                <Button
                  size="icon"
                  className="bg-rose-800 hover:bg-rose-700 text-rose-300 rounded-full"
                >
                  <Avatar className="bg-rose-700">
                    <AvatarFallback>
                      <PersonIcon className="text-rose-300" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-rose-800 text-rose-300">
                <UserList issueDetails={item} />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default IssueCard;
