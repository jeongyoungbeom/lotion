import { Document, RefType } from "mongoose";
import { Prop, Schema } from "@nestjs/mongoose";

export type BlockDocument = Block & Document;

enum block_type {
  paragraph = "paragraph",
  heading_1 = "heading_1",
  heading_2 = "heading_2",
  heading_3 = "heading_3",
  bulleted_list_item = "bulleted_list_item",
  numbered_list_item = "numbered_list_item",
  to_do = "to_do",
  toggle = "toggle",
  child_page = "child_page",
  child_database = "child_database",
  image = "image",
  video = "video",
  file = "file",
  pdf = "pdf",
  bookmark = "bookmark",
  callout = "callout",
  quote = "quote",
  equation = "equation",
  divider= "divider",
  table_of_contents = "table_of_contents",
  column = "column",
  column_list = "column_list",
  link_preview = "link_preview",
  synced_block = "synced_block",
  template = "template",
  link_to_page = "link_to_page",
  table = "table",
  table_row = "table_row"
}

@Schema()
export class Block {
  @Prop()
  object: string

  @Prop({ type: Date, required: true })
  created_time: Date

  @Prop()
  created_by: {
    object: string
    id: string
  }

  @Prop({ type: Date, required: true })
  last_edited_time: Date

  @Prop()
  last_edited_by: {
    object: string
    id: string
  }

  @Prop({ default: false })
  has_children: boolean

  @Prop({ required: true, enum: block_type})
  type: string

  @Prop({ ref: 'user.name'})
  kind: string

}