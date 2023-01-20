import { useMeQuery } from '../generated/graphql';

const useIsAdmin = () => {
  const { data } = useMeQuery();
  return data?.me?.role === 'admin';
};

export default useIsAdmin;
