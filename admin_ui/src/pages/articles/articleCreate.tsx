import { RichTextInput } from "ra-input-rich-text";
import {
  SimpleForm,
  TextInput,
  BooleanInput,
  ImageInput,
  ReferenceArrayInput,
  ReferenceInput,
  DateInput,
  Create,
} from "react-admin";
import { PreviewImage } from "../../Layout";

export const ArticleCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="excerpt" />
      <RichTextInput source="content" />
      <DateInput source="published_date" label="Publish date" defaultValue={new Date()} />
      <BooleanInput source="is_featured" label="Featured" />
      <ImageInput source="thumbnail" label="Thumbnail">
        <PreviewImage />
      </ImageInput>
      <ReferenceInput source="author" reference="authors" />
      <ReferenceArrayInput source="tags" reference="tags" />
    </SimpleForm>
  </Create>
);
