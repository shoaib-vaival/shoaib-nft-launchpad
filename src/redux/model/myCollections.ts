import { Action, action } from 'easy-peasy';

export interface CollectionModel {
    CollectionObj: any;
  add: Action<CollectionModel, any>;
}

const collectionObj: CollectionModel = {
  CollectionObj: {},
  add: action((state, payload: any) => {
    state.CollectionObj = payload;
  }),
};

export default collectionObj;
