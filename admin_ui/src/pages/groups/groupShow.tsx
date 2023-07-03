import {
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
  DateField,
  ListButton,
  EditButton,
  ImageField,
  NumberField,

  Datagrid,

  ReferenceManyField,

  ReferenceManyCount,

} from "react-admin";

const GroupShowActions = () => (
  <TopToolbar>
    <ListButton />
    <EditButton />
  </TopToolbar>
);



export const GroupShow = () => {
  return (
    <Show actions={<GroupShowActions />}>
      <SimpleShowLayout>
        <h3>Group data</h3>
        <TextField source="title" />
        <DateField source="createdAt" showTime />
        <DateField source="updatedAt" showTime />

      </SimpleShowLayout>
      <SimpleShowLayout>

          <div><b>Group contacts</b></div>
          <ReferenceManyField reference="contacts" target="groups_id" label="List of contacts included in the group" sort={{ field: "createdAt", order: "DESC" }}>
          
            <Datagrid>
              <ImageField
                source="thumbnail.url"
                label="Avatar"
                sx={{ "& img": { maxWidth: 30, maxHeight: 30, objectFit: "contain" } }}
              />
              <NumberField source="phone" />
              <TextField source="title" />
              <ReferenceManyCount
                label="Groups"
                reference="groups"
                target="contacts_id"
            />
              <DateField source="createdAt" showTime />
              <DateField source="updatedAt" showTime />
              <EditButton />
            </Datagrid>
         

        </ReferenceManyField>
      </SimpleShowLayout>
      

     


    </Show>

  );
};
