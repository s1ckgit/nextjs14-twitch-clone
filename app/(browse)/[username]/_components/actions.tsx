'use client';

import { onFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
}

const Actions = ({ isFollowing, userId }: ActionsProps) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) => toast.success(`You are now following ${data?.following.username}`))
        .catch(() => toast.error('Something went wrong'));
    });
  };

  return (
    <Button disabled={isPending || isFollowing} onClick={onClick} variant='primary'>
      Follow
    </Button>
  );
};
export default Actions;
