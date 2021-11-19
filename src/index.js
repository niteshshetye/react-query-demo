import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'



// important staffs
import {QueryClientProvider, QueryClient} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';

// create queryClient
const queryClient = new QueryClient();

ReactDOM.render(
    // Wrapp our whole app with QureyClientProvider which provide the client 
    <QueryClientProvider client={queryClient} >
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>, 
    document.getElementById('root'));