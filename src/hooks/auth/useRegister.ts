// hooks/authHooks.ts
import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services/authService';

export const useRegister = () => {
  return useMutation({
    mutationFn: authService.register,
  });
};
