import { CountrySnipppetFragment } from "../generated/graphql";
import { FormatedOption } from "../types";

export const getFormatedOptions = (options: any[]): FormatedOption[] => {
  return options.map(({ id, name }) => ({ label: name, value: id }));
};
