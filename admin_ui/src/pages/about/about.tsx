import { useState } from "react";
import { AboutEdit } from "./aboutEdit";
import { AboutShow } from "./aboutShow";
import { useGetOne } from "react-admin";
import { SingleType } from "../../ra-strapi-rest";

export const AboutComponent = () => {
  const [edit, setEdit] = useState(false);
  const { data: about, isLoading, error } = useGetOne("about", { id: SingleType });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;

  return (
    <>
      {edit ? (
        <AboutEdit data={about} setEdit={setEdit} />
      ) : (
        <AboutShow data={about} setEdit={setEdit} />
      )}
    </>
  );
};
