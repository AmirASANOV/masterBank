interface ILocalStorageFormHandler {
  set: <T>(key: string, data?: T) => boolean;
  get: <T>(key: string) => T;
  remove: (key: string) => void;
}

export const lsHandler = (): ILocalStorageFormHandler => ({
  set(key, data) {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    }
    if (data) localStorage.setItem(key, JSON.stringify(data));

    return true;
  },
  get(key: string) {
    const newData = localStorage.getItem(key);
    return newData ? JSON.parse(newData) : undefined;
  },
  remove(key: string) {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    }
  },
});

export const lsKeyStorage = {
  anketa: {
    credit_parameters_info: 'credit_parameters_info',
    work_info: 'work_info',
    additional_info: 'additional_info',
    passport_info: 'passport_info',
  },
  showcase: 'showcase',
};
