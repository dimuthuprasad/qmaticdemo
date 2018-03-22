import { IRoute } from './../models/route';
import { IUser } from "../models/user";

export interface AppState {
    readonly usersList: IUser[];
    readonly language: IRoute;
  }