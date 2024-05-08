export type NotRequiredPartial<T> = {
  [P in keyof T]?: T[P];
};
