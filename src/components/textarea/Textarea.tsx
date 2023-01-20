import React, { TextareaHTMLAttributes } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Textarea as CTextarea,
} from "@chakra-ui/react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  label: string;
  error: string;
  helperText?: string;
  isRequired?: boolean;
};

const Textarea: React.FC<Props> = ({
  id,
  error,
  label,
  helperText,
  isRequired = true,
  ...props
}) => {
  return (
    <FormControl
      as="fieldset"
      variant="floating"
      id={id}
      isRequired={isRequired}
      isInvalid={!!error}
    >
      <CTextarea
        resize={"vertical"}
        placeholder=" "
        {...props}
        isInvalid={!!error}
        minH="150px"
      />
      <FormLabel color={"gray.400"}>{label}</FormLabel>
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};

export default Textarea;
