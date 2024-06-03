import { TextFieldElement } from "react-hook-form-mui";

export const TextFieldInput = ({
  name, 
  value,
  setValue,
}: {
  name: string;
  value: string;
  setValue: (value: React.SetStateAction<string>) => void;
}) => {
  return <TextFieldElement type="text" value={value} onChange={(e) => setValue(e.target.value)} name={name} required fullWidth/>;
};
