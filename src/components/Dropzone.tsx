import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  Box,
  Divider,
  Text,
  Heading,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import CustomImage from "./image/Image";

export interface DropZoneProps {
  onChange?: (files: File[]) => void;
  preview: File | null;
  url?: string;
}

const DropZone: React.FC<DropZoneProps> = ({ onChange, preview, url }) => {
  const onDrop = useCallback((acceptedFiles) => {
    if (onChange) onChange(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    // accept: ".jpeg,.jpg,.png,.gif,.webp",
    accept: "image/*",
    maxFiles: 10,
  });

  return (
    <Flex
      p="2"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      h="full"
      minHeight="100px"
      maxW="250px"
      border="1px dashed"
      borderColor="gray.400"
      borderRadius="10px"
      bg={isDragActive && "gray.200"}
      transition="all 250ms ease-in-out"
      style={{ outline: "none" }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {preview || url ? (
        <Image
          src={!preview && url ? url : URL.createObjectURL(preview)}
          width={250}
          height={100}
          alt="Product preview"
          objectFit={"contain"}
        />
      ) : (
        <>
          <Text color="gray.400" textAlign="center" fontSize="12px">
            Faites glisser et déposez l'image du produit ici, ou
          </Text>
          <Button color="brand" type="button" variant="unstyled" size="xs">
            Cliquer pour naviguer
          </Button>
        </>
      )}
    </Flex>
  );
};

export default DropZone;
