import { Action, action } from 'easy-peasy';

export interface UserModel {
  UserObj: any;
  add: Action<UserModel, any>;
}

const userObj: UserModel = {
  UserObj: {},
  add: action((state, payload: any) => {
    state.UserObj = payload;
  }),
};

export default userObj;
