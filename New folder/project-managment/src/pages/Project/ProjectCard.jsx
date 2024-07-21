import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card } from '@/components/ui/card';
import { DotFilledIcon, DotsVerticalIcon } from '@radix-ui/react-icons';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProject, fetchProjectById } from '@/Redux/Project/Action';

const ProjectCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    // Confirm before deleting (optional)
    if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
      dispatch(deleteProject(item.id)); // Assuming deleteProject expects projectId as argument
    }
  };
  // useEffect(()=>{
  //   dispatch(fetchProjectById())
  // })

  return (
    <Card className="p-5 w-full lg:max-w-3xl bg-rose-dark-100 text-rose-200 border border-rose-700">
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <h1
                onClick={() => navigate(`/project/${item.id}`)}
                className="cursor-pointer font-bold text-lg text-rose-50"
              >
                {item.name}
              </h1>
              <DotFilledIcon className="text-rose-500" />
              <p className="text-sm text-rose-400">{item.category}</p>
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
                  <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p className="text-rose-300 text-sm">
            {item.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          {item.tags.map((tags, index) => (
            <Badge key={index} variant="outline" className="border-rose-600 text-rose-600">
              {tags}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

ProjectCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProjectCard;
