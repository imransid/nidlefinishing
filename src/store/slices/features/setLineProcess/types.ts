import {type AccessTokenInfo} from '@/store/types/types';

// This type will represent the sub-state for getting a single user by ID

export interface LineData {
  id: number;
  name: string;
  code?: string; // Optional since some entries do not have a 'code'
  rootPath: string;
  active: boolean;
  parentId: number;
  isLine: boolean;
  isFinishing: boolean;
  label: string;
  value: number;
}

export interface IReceiveItem {
  id: number;
  active: boolean;
  name: string;
  label: string;
  value: number;
}

export interface ISetLineState {
  finishingOrg: LineData[];
  finishingProcessList: IReceiveItem[];
}
