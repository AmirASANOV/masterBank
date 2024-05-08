export type Nullable<T> = null | T;

interface ValidState {
  valid: boolean;
  message?: string;
  value?: string;
}

export const initialStateValid: ValidState = {
  valid: false,
  message: '',
  value: '',
};
