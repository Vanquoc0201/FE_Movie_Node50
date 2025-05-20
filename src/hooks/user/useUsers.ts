import { userService } from "@/services/userService";
import { useQuery } from "@tanstack/react-query";
import { TUser } from "@/types/user/user.type";

export const useUsers = () => {
  return useQuery<TUser[]>({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await userService.getAllUser();
      return response.data.data as TUser[];
    }
  });
};
