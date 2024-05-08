import { useAppSelector } from '@/CustomHooks/useAppSelector';

interface LocalStorageHelper {
  get: (key: string) => string | null;
  set: (key: string, value: string) => void;
  remove: (key: string) => void;
}

const usePhoneNumberFromState = (ls: LocalStorageHelper) => () =>
  ls.get('phoneNumberFromState') || useAppSelector(state => state.session.phoneNumber);

export default usePhoneNumberFromState;
