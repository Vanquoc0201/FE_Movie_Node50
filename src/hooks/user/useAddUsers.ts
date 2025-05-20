'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userService } from '@/services/userService';
import { TAddUser } from '@/types/user/addUser.type';
import { toast } from 'react-toastify';

export const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TAddUser) => userService.addUser(data),
    onSuccess: () => {
      toast.success('Thêm người dùng thành công!');
      // Sau khi thêm thành công, có thể refetch lại danh sách người dùng
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error: any) => {
      toast.error(`Thêm thất bại: ${error?.message || 'Đã có lỗi xảy ra'}`);
    },
  });
};
