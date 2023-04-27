import { RichTextInput } from "ra-input-rich-text";
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  ImageInput,
  ReferenceArrayInput,
  ReferenceInput,
  DateInput,
} from "react-admin";
import { PreviewImage } from "../../Layout";

export const ArticleEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="title" />
      <TextInput source="excerpt" />
      <RichTextInput source="content" />
      <DateInput source="published_date" label="Publish date" />
      <BooleanInput source="is_featured" label="Featured" />
      <ImageInput source="thumbnail" label="Thumbnail">
        <PreviewImage />
      </ImageInput>
      <ReferenceInput source="author" reference="authors" />
      <ReferenceArrayInput source="tags" reference="tags" />
    </SimpleForm>
  </Edit>
);
