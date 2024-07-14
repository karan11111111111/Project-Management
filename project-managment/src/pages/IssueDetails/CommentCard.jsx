import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { TrashIcon } from 'lucide-react';

const CommentCard = () => {
  return (
    <div className='flex justify-between items-center bg-rose-900 text-rose-100 rounded-md p-4 mb-4'>
      <div className='flex items-center gap-4'>
        <Avatar>
          <AvatarFallback>K</AvatarFallback>
        </Avatar>

        <div className='space-y-1'>
          <p className='font-semibold'>Karan Kumar Sah</p>
          <p>How much work is pending</p>
        </div>
      </div>
      <Button className='rounded-full' variant='ghost' size='icon'>
        <TrashIcon className='text-rose-200' />
      </Button>
    </div>
  );
};

export default CommentCard;
