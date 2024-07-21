import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { assignedUserToIssue } from "@/Redux/Issue/Action";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function UserList({issueDetails}) {
  const dispatch = useDispatch()
  const {project} = useSelector(store => store)
  const handleAssignIssueToUser = (userId) => {
    dispatch(assignedUserToIssue({issuesId: issueDetails.id,userId}))

  }
    return (
    <>
      <div className="space-y-2">
        <div className="border rounded-md bg-rose-900 text-rose-100">
          <p className="py-2 px-3">{issueDetails.assignee?.fullName || "Unassigned"}</p>
        </div>
        {project.projectDetails?.team.map((item) => (
          <div
            onClick={()=>handleAssignIssueToUser(item.id)}
            key={item}
            className="py-2 group hover:bg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md border px-4 bg-rose-800 text-rose-200"
          >
            <Avatar>
              <AvatarFallback>{item.fullName[0]}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm leading-none">{item.fullName}</p>
              <p className="text-sm text-muted-foreground">@{item.fullName.toLowerCase()}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserList;
