import instance from "./instace";
import { IUser } from "../model/interface";

const signup = (user: IUser) => {
  return instance.post("/api/signup", user);
};
const signin = (user: IUser) => {
  return instance.post("/api/signin", user);
};

export { signup, signin };
