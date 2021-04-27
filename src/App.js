import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
// import { ReactQueryDevtools } from 'react-query-devtools';

import Planets from './PlanetsApi';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ margin: '10px', }}>
        <h3>List of Planets</h3>
        <Planets />
      </div>

      {/* <ReactQueryDevtools initialIsOpen={false} />*/}
    </QueryClientProvider>
  )
};

export default App;