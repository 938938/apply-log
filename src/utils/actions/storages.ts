import { Application } from '@/model/type';

const KEY = 'applylogList';

export const loadData = (): Application[] => {
  try {
    const storageData = localStorage.getItem(KEY);
    return storageData ? JSON.parse(storageData) : [];
  } catch {
    return [];
  }
};

export const saveData = (data: Application[]) => {
  localStorage.setItem(KEY, JSON.stringify(data));
};
