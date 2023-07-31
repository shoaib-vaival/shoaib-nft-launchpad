import collectionObj, { CollectionModel } from './myCollections';
import userObj, { UserModel } from './userModel';
import { persist } from "easy-peasy";

export interface StoreModel {
  collectionObj: CollectionModel;
  userObj: UserModel;
}
const model : StoreModel =  persist({
  collectionObj,
  userObj,
},
{
    storage: "localStorage",
}
);

export default model;
