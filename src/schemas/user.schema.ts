import { Document } from "mongoose";
import { Prop, Schema } from "@nestjs/mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  object: string

  @Prop()
  email: string

  @Prop()
  name: string

  @Prop()
  avatar_url: string
}