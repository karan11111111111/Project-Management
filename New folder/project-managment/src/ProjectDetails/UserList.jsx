import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

function UserList() {
  return (
    <>
      <div className="space-y-2">
        <div className="border rounded-md bg-rose-900 text-rose-100">
          <p className="py-2 px-3">{"Ram" || "Unassigned"}</p>
        </div>
        {[1, 1, 1, 1].map((item) => (
          <div
            key={item}
            className="py-2 group hover:bg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md border px-4 bg-rose-800 text-rose-200"
          >
            <Avatar>
              <AvatarFallback>K</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm leading-none">Karan Kumar Sah</p>
              <p className="text-sm text-muted-foreground">@Karan342.com</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserList;
