import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel, IconButton, Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import React, { InputHTMLAttributes } from "react";

import { BiHide, BiShow } from "react-icons/bi";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  type?: string;
  name: string;
  label: string;
  required?: boolean;
  error?: any;
  helperText?: string;
};

const InputField: React.FC<Props> = ({
  type,
  id,
  required,
  label,
  error,
  helperText,
  size: _,
  ...props
}) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl
      as="fieldset"
      variant="floating"
      id={id}
      isRequired
      isInvalid={!!error}
    >
      {type !== "password" ? (
        <>
          <Input
            type={type}
            placeholder=" "
            _focusWithin={{
              borderColor: "main",
              boxShadow: "0 0 0 1px #393939",
            }}
            {...props}
          />
          {/* It is important that the Label comes after the Control due to css selectors */}
          <FormLabel color={"gray.400"}>{label}</FormLabel>
        </>
      ) : (
        <InputGroup>
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder=" "
            _focusWithin={{
              borderColor: "main",
              boxShadow: "0 0 0 1px #393939",
            }}
            {...props}
          />
          {/* It is important that the Label comes after the Control due to css selectors */}
          <FormLabel color={"gray.400"}>{label}</FormLabel>
          <InputRightElement width="4.5rem">
            <IconButton
              aria-label="Hide or show"
              h="1.75rem"
              size="sm"
              onClick={handleClick}
              icon={show ? <BiHide /> : <BiShow />}
              _focusWithin={{
                borderColor: "main",
                boxShadow: "0 0 0 1px #393939",
              }}
            />
          </InputRightElement>
        </InputGroup>
      )}
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};

export default InputField;
