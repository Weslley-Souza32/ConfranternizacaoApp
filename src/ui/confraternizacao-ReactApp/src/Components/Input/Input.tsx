import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputsProps,
} from "@chakra-ui/react";
import React from "react";

interface IInputProps extends ChakraInputsProps {
  name: string;
  label: string;
  type: string;
  focusBorderColor?: string;
  bg?: string;
  variant?: string;
}

export const Input: React.FC<IInputProps> = ({
  name,
  label,
  type,
  focusBorderColor,
  bg,
  variant,
  ...rest
}) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        type={type}
        focusBorderColor={focusBorderColor}
        bg={bg}
        variant={variant}
        {...rest}
      />
    </FormControl>
  );
};
