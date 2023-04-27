import {
  Show,
  SimpleShowLayout,
  TextField,
  RichTextField,
  BooleanField,
  DateField,
  ImageField,
  ReferenceArrayField,
  ReferenceField,
} from "react-admin";

export const ArticleShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="title" />
        <RichTextField source="content" />
        <TextField source="published_date" label="Publish date" />
        <BooleanField source="is_featured" label="Featured" />
        <ImageField source="thumbnail.url" label="Thumbnail" />
        <ReferenceArrayField label="Tags" reference="tags" source="tags" />
        <ReferenceField source="author" reference="authors" label="Author" />
        <DateField source="published_date" />
      </SimpleShowLayout>
    </Show>
  );
};
