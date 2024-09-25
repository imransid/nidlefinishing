import {type AccessTokenInfo} from '@/store/types/types';

// This type will represent the sub-state for getting a single user by ID
export interface ISettingState {
  isLoading: boolean;
  month : string
}

export interface IPayload {
  status: boolean;
}
