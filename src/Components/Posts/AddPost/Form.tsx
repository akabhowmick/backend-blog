import { Stack, Button } from "@mui/material";
import {
  AutocompleteElement,
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
  const categories = [
    { id: "technology", label: "Technology" },
    { id: "health", label: "Health & Wellness" },
    { id: "finance", label: "Finance & Investing" },
    { id: "lifestyle", label: "Lifestyle" },
    { id: "education", label: "Education" },
    { id: "travel", label: "Travel" },
    { id: "food", label: "Food & Cooking" },
    { id: "sports", label: "Sports" },
    { id: "entertainment", label: "Entertainment" },
    { id: "personal_development", label: "Personal Development" },
  ];
  return (
    <form
      className="form-container"
      onSubmit={handleSubmit((data) => console.log(data))}
      noValidate
    >
      <Stack spacing={2}>
        <TextFieldElement name={"name"} label={"Name"} control={control} required fullWidth />
        <AutocompleteElement
          name={"auto"}
          label={"Autocomplete"}
          control={control}
          options={categories}
        />
        <Button type={"submit"} color={"primary"}>
          Submit
        </Button>
      </Stack>
    </form>
  );
};
