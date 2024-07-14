import React from 'react';
import { Card } from '@/components/ui/card';
import { DotFilledIcon, DotsVerticalIcon } from '@radix-ui/react-icons';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const ProjectCard = () => {
  const navigate = useNavigate();

  return (
    <Card className="p-5 w-full lg:max-w-3xl bg-rose-dark-100 text-rose-200 border border-rose-700">
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <h1
                onClick={() => navigate("/project/3")}
                className="cursor-pointer font-bold text-lg text-rose-50"
              >
                Create Ecommerce Project
              </h1>
              <DotFilledIcon className="text-rose-500" />
              <p className="text-sm text-rose-400">fullstack</p>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button className="rounded-full" variant="ghost" size="icon">
                    <DotsVerticalIcon className="text-rose-500" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-rose-dark-200 text-rose-50 border border-rose-600">
                  <DropdownMenuItem>Update</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p className="text-rose-300 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vitae.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          {[1, 1, 1, 1].map((item, index) => (
            <Badge key={index} variant="outline" className="border-rose-600 text-rose-600">
              frontend
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
