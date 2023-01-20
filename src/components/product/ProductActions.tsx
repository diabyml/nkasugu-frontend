import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import {
  ProductFragmentFragment,
  useDeleteProductMutation,
} from "../../generated/graphql";
import { useRouter } from "next/router";

interface Props {
  product: ProductFragmentFragment;
}

const ProductActions: React.FC<Props> = ({ product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const [deleteProduct, { loading: deleting }] = useDeleteProductMutation();

  const router = useRouter();
  return (
    <>
      <HStack>
        <Button size={"xs"} colorScheme={"red"} onClick={onOpen}>
          Supprimer
        </Button>
        <Button
          colorScheme={"gray"}
          size="xs"
          onClick={() => router.replace(`/product/edit/${product.id}`)}
        >
          Editer
        </Button>
      </HStack>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Supprimer Produit
            </AlertDialogHeader>

            <AlertDialogBody>
              Es-vous sûr? Vous ne pouvez pas annuler cette action par la suite.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Annuler
              </Button>
              <Button
                colorScheme="red"
                ml={3}
                isLoading={deleting}
                loadingText="Suppression"
                onClick={async () => {
                  await deleteProduct({
                    variables: { id: product.id },
                    update: (cache) => {
                      // Post:77
                      cache.evict({ id: "Product:" + product.id });
                    },
                  });
                  router.back();
                  onClose();
                }}
              >
                Supprimer
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ProductActions;
