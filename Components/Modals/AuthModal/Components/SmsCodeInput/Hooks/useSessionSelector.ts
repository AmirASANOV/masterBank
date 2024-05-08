import { useAppSelector } from '@/CustomHooks/useAppSelector';

const useSessionSelector = () =>
  useAppSelector(state => ({
    phoneNumber: state.session.phoneNumber,
    token: state.session.token,
    code: state.session.code,
    codeMessage: state.session.codeMessage,
  }));

export default useSessionSelector;
