import { Stack, Button } from "@mui/material";
import {
  AutocompleteElement,
  CheckboxElement,
  TextFieldElement,
  useForm,
} from "react-hook-form-mui";

export const Form = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      auto: "",
      check: false,
    },
  });
  const options = [
    { id: "one", label: "One" },
    { id: "two", label: "Two" },
    { id: "three", label: "Three" },
  ];
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} noValidate>
      <Stack spacing={2}>
        <TextFieldElement name={"name"} label={"Name"} control={control} required fullWidth />
        <AutocompleteElement
          name={"auto"}
          label={"Autocomplete"}
          control={control}
          options={options}
        />
        <CheckboxElement name={"check"} label={"Check"} control={control} />
        <Button type={"submit"} color={"primary"}>
          Submit
        </Button>
      </Stack>
    </form>
  );
};
