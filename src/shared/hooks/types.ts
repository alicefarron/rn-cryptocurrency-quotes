export type Callback<T> = T extends void
  ? () => Promise<void>
  : (args: T) => Promise<void>;

type ReturnCallback<T> = (args?: T) => Promise<void>;

export type ReturnUseFetching<T> = [ReturnCallback<T>, boolean, null | string];
