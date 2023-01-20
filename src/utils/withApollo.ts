import { withApollo as NextApolloWithApollo } from "next-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { NextPageContext } from "next";
import {
  PaginatedProducts,
  PaginatedSearchProducts,
} from "../generated/graphql";

const { createUploadLink } = require("apollo-upload-client");

const createClient = (ctx: NextPageContext) =>
  new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL as string,
    // uri: "http://localhost:8000/graphql",
    link: createUploadLink({
      uri: process.env.NEXT_PUBLIC_API_URL as string,
      // uri: "http://localhost:8000/graphql",
      headers: {
        cookie:
          (typeof window === "undefined"
            ? ctx?.req?.headers.cookie
            : undefined) || "",
      },
      fetch,
      fetchOptions: { credentials: "include" },
    }),
    credentials: "include",
    headers: {
      cookie:
        (typeof window === "undefined"
          ? ctx?.req?.headers.cookie
          : undefined) || "",
    },
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            products: {
              keyArgs: ["categoryId", "username"],
              merge(
                existing: PaginatedProducts | undefined,
                incoming: PaginatedProducts
              ): PaginatedProducts {
                return {
                  ...incoming,
                  data: [...(existing?.data || []), ...incoming.data],
                };
              },
            },
            paginatedSearch: {
              keyArgs: ["query"],
              merge(
                existing: PaginatedSearchProducts | undefined,
                incoming: PaginatedSearchProducts
              ): PaginatedSearchProducts {
                return {
                  ...incoming,
                  data: [...(existing?.data || []), ...incoming.data],
                };
              },
            },
          },
        },
      },
    }),
  });

export const withApollo = NextApolloWithApollo(createClient);
