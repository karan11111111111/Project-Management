import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { TrashIcon } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { deleteComment } from '@/Redux/Comment/Action';

const CommentCard = ({item}) => {
  const dispatch = useDispatch();
  const handleDelete =()=>{
    dispatch(deleteComment( item.id))

  }
  return (
    <div className='flex justify-between items-center bg-rose-900 text-rose-100 rounded-md p-4 mb-4'>
      <div className='flex items-center gap-4'>
        <Avatar>
          <AvatarFallback>{item.user.fullName[0]}</AvatarFallback>
        </Avatar>

        <div className='space-y-1'>
          <p className='font-semibold'>{item.user.fullName}</p>
          <p>{item.content}</p>
          {console.log("item comment content",item.content)}
        </div>
      </div>
      <Button onClick={handleDelete} className='rounded-full' variant='ghost' size='icon'>
        <TrashIcon className='text-rose-200' />
      </Button>
    </div>
  );
};

export default CommentCard;
