import { useAppSelector } from '@/CustomHooks/useAppSelector';

const useConfigSelector = () =>
  useAppSelector(state => ({
    type: state.config.user.type,
    code_in_response: state.config.user.code_in_response,
  }));

export default useConfigSelector;
