import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type AddCategoryInput = {
  categoryOrCategories: Scalars['String'];
  parentId?: InputMaybe<Scalars['String']>;
};

export type AddProductInputType = {
  categoryId: Scalars['String'];
  cityId: Scalars['String'];
  countryId: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['String'];
  slug: Scalars['String'];
  subCategoryId: Scalars['String'];
  userId: Scalars['String'];
};

export type AddProductResponse = {
  __typename?: 'AddProductResponse';
  errors?: Maybe<Array<FieldError>>;
  product?: Maybe<Product>;
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  parentId?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['String'];
};

export type ChangePasswordInput = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};

export type City = {
  __typename?: 'City';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Country = {
  __typename?: 'Country';
  cities: Array<City>;
  code: Scalars['String'];
  createdAt: Scalars['String'];
  flag: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  phoneCode: Scalars['String'];
  updatedAt: Scalars['String'];
  users: Array<User>;
};

export type EditProductInputType = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
  productImagesIds: Scalars['String'];
  slug?: InputMaybe<Scalars['String']>;
};

export type EditUserInput = {
  cityId: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  username: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  productId: Scalars['Float'];
  publicId: Scalars['String'];
  secureUrl: Scalars['String'];
  updatedAt: Scalars['String'];
  url: Scalars['String'];
  variant: Scalars['String'];
};

export type LocationResponse = {
  __typename?: 'LocationResponse';
  country?: Maybe<Country>;
  error?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategory: Scalars['Boolean'];
  addProduct: AddProductResponse;
  changePassword: UserResponse;
  deleProduct: Scalars['Boolean'];
  editProduct: Product;
  editUser: User;
  forgotPassword: Scalars['Boolean'];
  loadCountry: Scalars['Boolean'];
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
};


export type MutationAddCategoryArgs = {
  data: AddCategoryInput;
};


export type MutationAddProductArgs = {
  data: AddProductInputType;
  image1: Scalars['Upload'];
  image2?: InputMaybe<Scalars['Upload']>;
  image3?: InputMaybe<Scalars['Upload']>;
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationDeleProductArgs = {
  id: Scalars['String'];
};


export type MutationEditProductArgs = {
  data: EditProductInputType;
  image1?: InputMaybe<Scalars['Upload']>;
  image2?: InputMaybe<Scalars['Upload']>;
  image3?: InputMaybe<Scalars['Upload']>;
};


export type MutationEditUserArgs = {
  data: EditUserInput;
  userId: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoadCountryArgs = {
  countryCode: Scalars['String'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};

export type PaginatedProducts = {
  __typename?: 'PaginatedProducts';
  data: Array<Product>;
  hasMore: Scalars['Boolean'];
};

export type PaginatedProductsInput = {
  countryId: Scalars['String'];
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type PaginatedSearchProducts = {
  __typename?: 'PaginatedSearchProducts';
  data: Array<Product>;
  hasMore: Scalars['Boolean'];
};

export type Product = {
  __typename?: 'Product';
  categories: Array<Category>;
  city: City;
  cityId: Scalars['Float'];
  country: Country;
  countryId: Scalars['Float'];
  createdAt: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  images: Array<Image>;
  isSold: Scalars['Boolean'];
  name: Scalars['String'];
  price: Scalars['String'];
  shippeable: Scalars['Boolean'];
  slug: Scalars['String'];
  updatedAt: Scalars['String'];
  user: User;
  userId: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  getCategory: Category;
  hello: Scalars['String'];
  me?: Maybe<User>;
  paginatedSearch: PaginatedSearchProducts;
  product: Product;
  products: PaginatedProducts;
  search: Array<Product>;
  userLocation: LocationResponse;
};


export type QueryCategoriesArgs = {
  parentId?: InputMaybe<Scalars['String']>;
};


export type QueryGetCategoryArgs = {
  categoryName: Scalars['String'];
};


export type QueryPaginatedSearchArgs = {
  countryId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  query: Scalars['String'];
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryProductsArgs = {
  categoryId?: InputMaybe<Scalars['String']>;
  data: PaginatedProductsInput;
  username?: InputMaybe<Scalars['String']>;
};


export type QuerySearchArgs = {
  countryId: Scalars['String'];
  query: Scalars['String'];
};


export type QueryUserLocationArgs = {
  countryCode: Scalars['String'];
};

export type RegisterInput = {
  cityId: Scalars['String'];
  countryId: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  city: City;
  country: Country;
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  phone: Scalars['String'];
  role: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type CitySnippetFragment = { __typename?: 'City', id: string, name: string };

export type CountrySnipppetFragment = { __typename?: 'Country', id: string, flag: string, name: string, code: string, phoneCode: string };

export type ProductFragmentFragment = { __typename?: 'Product', id: string, slug: string, name: string, description?: string | null, price: string, createdAt: string, images: Array<{ __typename?: 'Image', id: string, url: string, secureUrl: string, publicId: string, createdAt: string, updatedAt: string, variant: string }>, country: { __typename?: 'Country', id: string, name: string, flag: string }, city: { __typename?: 'City', id: string, name: string }, user: { __typename?: 'User', id: string, username: string, phone: string } };

export type UserSnippetFragment = { __typename?: 'User', id: string, username: string, email: string, phone: string, role: string, country: { __typename?: 'Country', id: string, flag: string, name: string, code: string, phoneCode: string }, city: { __typename?: 'City', id: string, name: string } };

export type AddCategoryMutationVariables = Exact<{
  categoryOrCategories: Scalars['String'];
  parentId?: InputMaybe<Scalars['String']>;
}>;


export type AddCategoryMutation = { __typename?: 'Mutation', addCategory: boolean };

export type AddProductMutationVariables = Exact<{
  image1: Scalars['Upload'];
  image2?: InputMaybe<Scalars['Upload']>;
  image3?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
  price: Scalars['String'];
  userId: Scalars['String'];
  cityId: Scalars['String'];
  countryId: Scalars['String'];
  categoryId: Scalars['String'];
  subCategoryId: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
}>;


export type AddProductMutation = { __typename?: 'Mutation', addProduct: { __typename?: 'AddProductResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, product?: { __typename?: 'Product', slug: string } | null } };

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: string, username: string, email: string, phone: string, role: string, country: { __typename?: 'Country', id: string, flag: string, name: string, code: string, phoneCode: string }, city: { __typename?: 'City', id: string, name: string } } | null } };

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleProduct: boolean };

export type EditProductMutationVariables = Exact<{
  image1?: InputMaybe<Scalars['Upload']>;
  image2?: InputMaybe<Scalars['Upload']>;
  image3?: InputMaybe<Scalars['Upload']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
  productImagesIds: Scalars['String'];
}>;


export type EditProductMutation = { __typename?: 'Mutation', editProduct: { __typename?: 'Product', id: string, slug: string, name: string, description?: string | null, price: string, createdAt: string, images: Array<{ __typename?: 'Image', id: string, url: string, secureUrl: string, publicId: string, createdAt: string, updatedAt: string, variant: string }>, country: { __typename?: 'Country', id: string, name: string, flag: string }, city: { __typename?: 'City', id: string, name: string }, user: { __typename?: 'User', id: string, username: string, phone: string } } };

export type EditUserMutationVariables = Exact<{
  userId: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  cityId: Scalars['String'];
  phone: Scalars['String'];
}>;


export type EditUserMutation = { __typename?: 'Mutation', editUser: { __typename?: 'User', id: string, username: string, email: string, phone: string, role: string, country: { __typename?: 'Country', id: string, flag: string, name: string, code: string, phoneCode: string }, city: { __typename?: 'City', id: string, name: string } } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LoadCountryMutationVariables = Exact<{
  countryCode: Scalars['String'];
}>;


export type LoadCountryMutation = { __typename?: 'Mutation', loadCountry: boolean };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  countryId: Scalars['String'];
  cityId: Scalars['String'];
  phone: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', user?: { __typename?: 'User', id: string, username: string, email: string, phone: string, role: string, country: { __typename?: 'Country', id: string, flag: string, name: string, code: string, phoneCode: string }, city: { __typename?: 'City', id: string, name: string } } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type GetCategoriesQueryVariables = Exact<{
  parentId?: InputMaybe<Scalars['String']>;
}>;


export type GetCategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string, parentId?: string | null }> };

export type GetCategoryQueryVariables = Exact<{
  categoryName: Scalars['String'];
}>;


export type GetCategoryQuery = { __typename?: 'Query', getCategory: { __typename?: 'Category', id: string, name: string, parentId?: string | null } };

export type GetCategoryProductsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  countryId: Scalars['String'];
  categoryId?: InputMaybe<Scalars['String']>;
}>;


export type GetCategoryProductsQuery = { __typename?: 'Query', categoryProducts: { __typename?: 'PaginatedProducts', hasMore: boolean, data: Array<{ __typename?: 'Product', id: string, slug: string, name: string, description?: string | null, price: string, createdAt: string, images: Array<{ __typename?: 'Image', id: string, url: string, secureUrl: string, publicId: string, createdAt: string, updatedAt: string, variant: string }>, country: { __typename?: 'Country', id: string, name: string, flag: string }, city: { __typename?: 'City', id: string, name: string }, user: { __typename?: 'User', id: string, username: string, phone: string } }> } };

export type GetProductQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
}>;


export type GetProductQuery = { __typename?: 'Query', product: { __typename?: 'Product', id: string, slug: string, name: string, description?: string | null, price: string, createdAt: string, images: Array<{ __typename?: 'Image', id: string, url: string, secureUrl: string, publicId: string, createdAt: string, updatedAt: string, variant: string }>, country: { __typename?: 'Country', id: string, name: string, flag: string }, city: { __typename?: 'City', id: string, name: string }, user: { __typename?: 'User', id: string, username: string, phone: string } } };

export type GetProductsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  countryId: Scalars['String'];
  categoryId?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
}>;


export type GetProductsQuery = { __typename?: 'Query', products: { __typename?: 'PaginatedProducts', hasMore: boolean, data: Array<{ __typename?: 'Product', id: string, slug: string, name: string, description?: string | null, price: string, createdAt: string, images: Array<{ __typename?: 'Image', id: string, url: string, secureUrl: string, publicId: string, createdAt: string, updatedAt: string, variant: string }>, country: { __typename?: 'Country', id: string, name: string, flag: string }, city: { __typename?: 'City', id: string, name: string }, user: { __typename?: 'User', id: string, username: string, phone: string } }> } };

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', user?: { __typename?: 'User', id: string, username: string, email: string, phone: string, role: string, country: { __typename?: 'Country', id: string, flag: string, name: string, code: string, phoneCode: string }, city: { __typename?: 'City', id: string, name: string } } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, username: string, email: string, phone: string, role: string, country: { __typename?: 'Country', id: string, flag: string, name: string, code: string, phoneCode: string }, city: { __typename?: 'City', id: string, name: string } } | null };

export type PaginatedSearchQueryVariables = Exact<{
  query: Scalars['String'];
  countryId: Scalars['String'];
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type PaginatedSearchQuery = { __typename?: 'Query', paginatedSearch: { __typename?: 'PaginatedSearchProducts', hasMore: boolean, data: Array<{ __typename?: 'Product', id: string, slug: string, name: string, description?: string | null, price: string, createdAt: string, images: Array<{ __typename?: 'Image', id: string, url: string, secureUrl: string, publicId: string, createdAt: string, updatedAt: string, variant: string }>, country: { __typename?: 'Country', id: string, name: string, flag: string }, city: { __typename?: 'City', id: string, name: string }, user: { __typename?: 'User', id: string, username: string, phone: string } }> } };

export type SearchQueryVariables = Exact<{
  query: Scalars['String'];
  countryId: Scalars['String'];
}>;


export type SearchQuery = { __typename?: 'Query', search: Array<{ __typename?: 'Product', id: string, name: string, slug: string, images: Array<{ __typename?: 'Image', id: string, url: string, secureUrl: string, publicId: string, createdAt: string, updatedAt: string, variant: string }> }> };

export type UserLocationQueryVariables = Exact<{
  countryCode: Scalars['String'];
}>;


export type UserLocationQuery = { __typename?: 'Query', userLocation: { __typename?: 'LocationResponse', error?: string | null, country?: { __typename?: 'Country', id: string, flag: string, name: string, code: string, phoneCode: string, cities: Array<{ __typename?: 'City', id: string, name: string }> } | null } };

export const ProductFragmentFragmentDoc = gql`
    fragment ProductFragment on Product {
  id
  slug
  name
  description
  price
  createdAt
  images {
    id
    url
    secureUrl
    publicId
    createdAt
    updatedAt
    variant
  }
  country {
    id
    name
    flag
  }
  city {
    id
    name
  }
  user {
    id
    username
    phone
  }
}
    `;
export const CountrySnipppetFragmentDoc = gql`
    fragment CountrySnipppet on Country {
  id
  flag
  name
  code
  phoneCode
}
    `;
export const CitySnippetFragmentDoc = gql`
    fragment CitySnippet on City {
  id
  name
}
    `;
export const UserSnippetFragmentDoc = gql`
    fragment UserSnippet on User {
  id
  username
  email
  phone
  role
  country {
    ...CountrySnipppet
  }
  city {
    ...CitySnippet
  }
}
    ${CountrySnipppetFragmentDoc}
${CitySnippetFragmentDoc}`;
export const AddCategoryDocument = gql`
    mutation AddCategory($categoryOrCategories: String!, $parentId: String) {
  addCategory(
    data: {categoryOrCategories: $categoryOrCategories, parentId: $parentId}
  )
}
    `;
export type AddCategoryMutationFn = Apollo.MutationFunction<AddCategoryMutation, AddCategoryMutationVariables>;

/**
 * __useAddCategoryMutation__
 *
 * To run a mutation, you first call `useAddCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCategoryMutation, { data, loading, error }] = useAddCategoryMutation({
 *   variables: {
 *      categoryOrCategories: // value for 'categoryOrCategories'
 *      parentId: // value for 'parentId'
 *   },
 * });
 */
export function useAddCategoryMutation(baseOptions?: Apollo.MutationHookOptions<AddCategoryMutation, AddCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCategoryMutation, AddCategoryMutationVariables>(AddCategoryDocument, options);
      }
export type AddCategoryMutationHookResult = ReturnType<typeof useAddCategoryMutation>;
export type AddCategoryMutationResult = Apollo.MutationResult<AddCategoryMutation>;
export type AddCategoryMutationOptions = Apollo.BaseMutationOptions<AddCategoryMutation, AddCategoryMutationVariables>;
export const AddProductDocument = gql`
    mutation AddProduct($image1: Upload!, $image2: Upload, $image3: Upload, $name: String!, $price: String!, $userId: String!, $cityId: String!, $countryId: String!, $categoryId: String!, $subCategoryId: String!, $description: String, $slug: String!) {
  addProduct(
    image1: $image1
    image2: $image2
    image3: $image3
    data: {name: $name, price: $price, description: $description, userId: $userId, cityId: $cityId, countryId: $countryId, categoryId: $categoryId, subCategoryId: $subCategoryId, slug: $slug}
  ) {
    errors {
      field
      message
    }
    product {
      slug
    }
  }
}
    `;
export type AddProductMutationFn = Apollo.MutationFunction<AddProductMutation, AddProductMutationVariables>;

/**
 * __useAddProductMutation__
 *
 * To run a mutation, you first call `useAddProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductMutation, { data, loading, error }] = useAddProductMutation({
 *   variables: {
 *      image1: // value for 'image1'
 *      image2: // value for 'image2'
 *      image3: // value for 'image3'
 *      name: // value for 'name'
 *      price: // value for 'price'
 *      userId: // value for 'userId'
 *      cityId: // value for 'cityId'
 *      countryId: // value for 'countryId'
 *      categoryId: // value for 'categoryId'
 *      subCategoryId: // value for 'subCategoryId'
 *      description: // value for 'description'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useAddProductMutation(baseOptions?: Apollo.MutationHookOptions<AddProductMutation, AddProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProductMutation, AddProductMutationVariables>(AddProductDocument, options);
      }
export type AddProductMutationHookResult = ReturnType<typeof useAddProductMutation>;
export type AddProductMutationResult = Apollo.MutationResult<AddProductMutation>;
export type AddProductMutationOptions = Apollo.BaseMutationOptions<AddProductMutation, AddProductMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(data: {token: $token, newPassword: $newPassword}) {
    errors {
      field
      message
    }
    user {
      ...UserSnippet
    }
  }
}
    ${UserSnippetFragmentDoc}`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const DeleteProductDocument = gql`
    mutation DeleteProduct($id: String!) {
  deleProduct(id: $id)
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const EditProductDocument = gql`
    mutation EditProduct($image1: Upload, $image2: Upload, $image3: Upload, $name: String, $price: String, $description: String, $slug: String, $productId: String!, $productImagesIds: String!) {
  editProduct(
    image1: $image1
    image2: $image2
    image3: $image3
    data: {name: $name, price: $price, description: $description, slug: $slug, productId: $productId, productImagesIds: $productImagesIds}
  ) {
    ...ProductFragment
  }
}
    ${ProductFragmentFragmentDoc}`;
export type EditProductMutationFn = Apollo.MutationFunction<EditProductMutation, EditProductMutationVariables>;

/**
 * __useEditProductMutation__
 *
 * To run a mutation, you first call `useEditProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProductMutation, { data, loading, error }] = useEditProductMutation({
 *   variables: {
 *      image1: // value for 'image1'
 *      image2: // value for 'image2'
 *      image3: // value for 'image3'
 *      name: // value for 'name'
 *      price: // value for 'price'
 *      description: // value for 'description'
 *      slug: // value for 'slug'
 *      productId: // value for 'productId'
 *      productImagesIds: // value for 'productImagesIds'
 *   },
 * });
 */
export function useEditProductMutation(baseOptions?: Apollo.MutationHookOptions<EditProductMutation, EditProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditProductMutation, EditProductMutationVariables>(EditProductDocument, options);
      }
export type EditProductMutationHookResult = ReturnType<typeof useEditProductMutation>;
export type EditProductMutationResult = Apollo.MutationResult<EditProductMutation>;
export type EditProductMutationOptions = Apollo.BaseMutationOptions<EditProductMutation, EditProductMutationVariables>;
export const EditUserDocument = gql`
    mutation EditUser($userId: String!, $username: String!, $email: String!, $cityId: String!, $phone: String!) {
  editUser(
    userId: $userId
    data: {username: $username, email: $email, phone: $phone, cityId: $cityId}
  ) {
    ...UserSnippet
  }
}
    ${UserSnippetFragmentDoc}`;
export type EditUserMutationFn = Apollo.MutationFunction<EditUserMutation, EditUserMutationVariables>;

/**
 * __useEditUserMutation__
 *
 * To run a mutation, you first call `useEditUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editUserMutation, { data, loading, error }] = useEditUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      cityId: // value for 'cityId'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useEditUserMutation(baseOptions?: Apollo.MutationHookOptions<EditUserMutation, EditUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditUserMutation, EditUserMutationVariables>(EditUserDocument, options);
      }
export type EditUserMutationHookResult = ReturnType<typeof useEditUserMutation>;
export type EditUserMutationResult = Apollo.MutationResult<EditUserMutation>;
export type EditUserMutationOptions = Apollo.BaseMutationOptions<EditUserMutation, EditUserMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoadCountryDocument = gql`
    mutation LoadCountry($countryCode: String!) {
  loadCountry(countryCode: $countryCode)
}
    `;
export type LoadCountryMutationFn = Apollo.MutationFunction<LoadCountryMutation, LoadCountryMutationVariables>;

/**
 * __useLoadCountryMutation__
 *
 * To run a mutation, you first call `useLoadCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoadCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loadCountryMutation, { data, loading, error }] = useLoadCountryMutation({
 *   variables: {
 *      countryCode: // value for 'countryCode'
 *   },
 * });
 */
export function useLoadCountryMutation(baseOptions?: Apollo.MutationHookOptions<LoadCountryMutation, LoadCountryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoadCountryMutation, LoadCountryMutationVariables>(LoadCountryDocument, options);
      }
export type LoadCountryMutationHookResult = ReturnType<typeof useLoadCountryMutation>;
export type LoadCountryMutationResult = Apollo.MutationResult<LoadCountryMutation>;
export type LoadCountryMutationOptions = Apollo.BaseMutationOptions<LoadCountryMutation, LoadCountryMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $email: String!, $password: String!, $countryId: String!, $cityId: String!, $phone: String!) {
  register(
    data: {username: $username, email: $email, password: $password, phone: $phone, countryId: $countryId, cityId: $cityId}
  ) {
    user {
      ...UserSnippet
    }
    errors {
      field
      message
    }
  }
}
    ${UserSnippetFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      countryId: // value for 'countryId'
 *      cityId: // value for 'cityId'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const GetCategoriesDocument = gql`
    query GetCategories($parentId: String) {
  categories(parentId: $parentId) {
    id
    name
    parentId
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *      parentId: // value for 'parentId'
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetCategoryDocument = gql`
    query GetCategory($categoryName: String!) {
  getCategory(categoryName: $categoryName) {
    id
    name
    parentId
  }
}
    `;

/**
 * __useGetCategoryQuery__
 *
 * To run a query within a React component, call `useGetCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryQuery({
 *   variables: {
 *      categoryName: // value for 'categoryName'
 *   },
 * });
 */
export function useGetCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
      }
export function useGetCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
        }
export type GetCategoryQueryHookResult = ReturnType<typeof useGetCategoryQuery>;
export type GetCategoryLazyQueryHookResult = ReturnType<typeof useGetCategoryLazyQuery>;
export type GetCategoryQueryResult = Apollo.QueryResult<GetCategoryQuery, GetCategoryQueryVariables>;
export const GetCategoryProductsDocument = gql`
    query GetCategoryProducts($cursor: String, $limit: Int, $countryId: String!, $categoryId: String) {
  categoryProducts: products(
    categoryId: $categoryId
    data: {cursor: $cursor, limit: $limit, countryId: $countryId}
  ) {
    hasMore
    data {
      ...ProductFragment
    }
  }
}
    ${ProductFragmentFragmentDoc}`;

/**
 * __useGetCategoryProductsQuery__
 *
 * To run a query within a React component, call `useGetCategoryProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryProductsQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      limit: // value for 'limit'
 *      countryId: // value for 'countryId'
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useGetCategoryProductsQuery(baseOptions: Apollo.QueryHookOptions<GetCategoryProductsQuery, GetCategoryProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoryProductsQuery, GetCategoryProductsQueryVariables>(GetCategoryProductsDocument, options);
      }
export function useGetCategoryProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryProductsQuery, GetCategoryProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoryProductsQuery, GetCategoryProductsQueryVariables>(GetCategoryProductsDocument, options);
        }
export type GetCategoryProductsQueryHookResult = ReturnType<typeof useGetCategoryProductsQuery>;
export type GetCategoryProductsLazyQueryHookResult = ReturnType<typeof useGetCategoryProductsLazyQuery>;
export type GetCategoryProductsQueryResult = Apollo.QueryResult<GetCategoryProductsQuery, GetCategoryProductsQueryVariables>;
export const GetProductDocument = gql`
    query GetProduct($slug: String, $id: String) {
  product(slug: $slug, id: $id) {
    ...ProductFragment
  }
}
    ${ProductFragmentFragmentDoc}`;

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductQuery(baseOptions?: Apollo.QueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
      }
export function useGetProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
        }
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>;
export type GetProductQueryResult = Apollo.QueryResult<GetProductQuery, GetProductQueryVariables>;
export const GetProductsDocument = gql`
    query GetProducts($cursor: String, $limit: Int, $countryId: String!, $categoryId: String, $username: String) {
  products(
    categoryId: $categoryId
    username: $username
    data: {cursor: $cursor, limit: $limit, countryId: $countryId}
  ) {
    hasMore
    data {
      ...ProductFragment
    }
  }
}
    ${ProductFragmentFragmentDoc}`;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      limit: // value for 'limit'
 *      countryId: // value for 'countryId'
 *      categoryId: // value for 'categoryId'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(data: {usernameOrEmail: $usernameOrEmail, password: $password}) {
    user {
      ...UserSnippet
    }
    errors {
      field
      message
    }
  }
}
    ${UserSnippetFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...UserSnippet
  }
}
    ${UserSnippetFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const PaginatedSearchDocument = gql`
    query PaginatedSearch($query: String!, $countryId: String!, $skip: Int, $limit: Int) {
  paginatedSearch(
    countryId: $countryId
    query: $query
    skip: $skip
    limit: $limit
  ) {
    hasMore
    data {
      ...ProductFragment
    }
  }
}
    ${ProductFragmentFragmentDoc}`;

/**
 * __usePaginatedSearchQuery__
 *
 * To run a query within a React component, call `usePaginatedSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginatedSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginatedSearchQuery({
 *   variables: {
 *      query: // value for 'query'
 *      countryId: // value for 'countryId'
 *      skip: // value for 'skip'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function usePaginatedSearchQuery(baseOptions: Apollo.QueryHookOptions<PaginatedSearchQuery, PaginatedSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaginatedSearchQuery, PaginatedSearchQueryVariables>(PaginatedSearchDocument, options);
      }
export function usePaginatedSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaginatedSearchQuery, PaginatedSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaginatedSearchQuery, PaginatedSearchQueryVariables>(PaginatedSearchDocument, options);
        }
export type PaginatedSearchQueryHookResult = ReturnType<typeof usePaginatedSearchQuery>;
export type PaginatedSearchLazyQueryHookResult = ReturnType<typeof usePaginatedSearchLazyQuery>;
export type PaginatedSearchQueryResult = Apollo.QueryResult<PaginatedSearchQuery, PaginatedSearchQueryVariables>;
export const SearchDocument = gql`
    query Search($query: String!, $countryId: String!) {
  search(query: $query, countryId: $countryId) {
    id
    name
    slug
    images {
      id
      url
      secureUrl
      publicId
      createdAt
      updatedAt
      variant
    }
  }
}
    `;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      query: // value for 'query'
 *      countryId: // value for 'countryId'
 *   },
 * });
 */
export function useSearchQuery(baseOptions: Apollo.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
      }
export function useSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = Apollo.QueryResult<SearchQuery, SearchQueryVariables>;
export const UserLocationDocument = gql`
    query UserLocation($countryCode: String!) {
  userLocation(countryCode: $countryCode) {
    error
    country {
      ...CountrySnipppet
      cities {
        ...CitySnippet
      }
    }
  }
}
    ${CountrySnipppetFragmentDoc}
${CitySnippetFragmentDoc}`;

/**
 * __useUserLocationQuery__
 *
 * To run a query within a React component, call `useUserLocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserLocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserLocationQuery({
 *   variables: {
 *      countryCode: // value for 'countryCode'
 *   },
 * });
 */
export function useUserLocationQuery(baseOptions: Apollo.QueryHookOptions<UserLocationQuery, UserLocationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserLocationQuery, UserLocationQueryVariables>(UserLocationDocument, options);
      }
export function useUserLocationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserLocationQuery, UserLocationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserLocationQuery, UserLocationQueryVariables>(UserLocationDocument, options);
        }
export type UserLocationQueryHookResult = ReturnType<typeof useUserLocationQuery>;
export type UserLocationLazyQueryHookResult = ReturnType<typeof useUserLocationLazyQuery>;
export type UserLocationQueryResult = Apollo.QueryResult<UserLocationQuery, UserLocationQueryVariables>;