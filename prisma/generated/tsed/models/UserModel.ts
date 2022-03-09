import { User } from "../client";
import { Integer, Required, Property, Allow, CollectionOf } from "@tsed/schema";
import { PostModel } from "./PostModel";

export class UserModel implements User {
  @Property(Number)
  @Integer()
  @Required()
  id: number;

  @Property(String)
  @Required()
  email: string;

  @Property(String)
  @Allow(null)
  name: string | null;

  @CollectionOf(() => PostModel)
  @Required()
  posts: PostModel[];
}

