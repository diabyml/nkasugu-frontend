import React, { SelectHTMLAttributes } from "react";
import { Select as ChakraSelect } from "@chakra-ui/react";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Array<{ label: string; value: string }>;
  error?: string;
  ref?: any;
};

const Select: React.FC<Props> = ({
  options,
  error,
  ref,
  size: _,
  ...props
}) => {
  return (
    <ChakraSelect
      ref={ref}
      // placeholder="Choisissze votre Ville"
      fontSize="14px"
      name="cityId"
      _focusWithin={{
        borderColor: "main",
        boxShadow: "0 0 0 1px #393939",
      }}
      {...props}
      borderColor={error && "#E53E3E"}
      boxShadow={error && "0 0 0 1px #e53e3e"}
    >
      {options.map(({ label, value }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </ChakraSelect>
  );
};

export default Select;
