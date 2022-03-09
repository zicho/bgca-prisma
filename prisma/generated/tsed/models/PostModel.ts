import { Post } from "../client";
import { Integer, Required, Property, Allow } from "@tsed/schema";
import { UserModel } from "./UserModel";

export class PostModel implements Post {
  @Property(Number)
  @Integer()
  @Required()
  id: number;

  @Property(String)
  @Required()
  title: string;

  @Property(String)
  @Allow(null)
  content: string | null;

  @Property(Boolean)
  @Allow(null)
  published: boolean | null;

  @Property(() => UserModel)
  @Allow(null)
  author: UserModel | null;

  @Property(Number)
  @Integer()
  @Allow(null)
  authorId: number | null;
}

