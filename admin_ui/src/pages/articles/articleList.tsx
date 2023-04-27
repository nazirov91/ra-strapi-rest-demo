import {
  Datagrid,
  BooleanField,
  List,
  TextField,
  FunctionField,
  ImageField,
  ReferenceArrayField,
  ReferenceField,
  DateField,
  SearchInput,
  DateInput,
  BooleanInput,
  NumberField,
  ReferenceInput,
} from "react-admin";

const articleFilters = [
  <SearchInput source="q" alwaysOn />,
  <DateInput label="Published date" source="published_date" defaultValue={new Date()} />,
  <ReferenceInput source="author" reference="authors" label="Author" />,
  <BooleanInput label="Featured" source="is_featured" defaultValue={true} />,
];

export const ArticleList = () => (
  <List hasCreate hasEdit filters={articleFilters}>
    <Datagrid rowClick="show">
      <TextField source="title" />
      <FunctionField label="Excerpt" render={(a: any) => `${a.excerpt.substring(0, 30)}...`} />
      <TextField source="published_date" label="Publish date" />
      <BooleanField source="is_featured" label="Featured" />
      <ImageField
        source="thumbnail.url"
        label="Thumbnail"
        sx={{ "& img": { maxWidth: 30, maxHeight: 30, objectFit: "contain" } }}
      />
      <ReferenceArrayField label="Tags" reference="tags" source="tags" />
      <ReferenceField source="author" reference="authors" label="Author" />
      <DateField source="published_date" />
      <NumberField source="rating" />
    </Datagrid>
  </List>
);
