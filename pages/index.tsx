import type { NextPage } from 'next'
// import { useQuery } from '../hooks/useQuery' ;
// import { useQueryClient } from '@tanstack/react-query';
// import QUERY_KEYS from '../hooks/queryKeys';
// import API_URL from '../hooks/apiUrls'


const Home: NextPage = () => {

  // const queryClient = useQueryClient();
  // dummy api call

  // const { data } = useQuery<any>({
  //   url: API_URL?.CONTACTS_SUB,
  //   queryKey: [QUERY_KEYS?.CONTACTS],
    // queryClient.invalidateQueries([QUERY_KEYS.BROADCAST_LIST]);
  // });

  return (
    <div>
      <h1>test</h1>
    </div>
  )
}

export default Home
