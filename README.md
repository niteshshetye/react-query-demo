# The Flow Starts from index.js
The things which we import from react-qurey
{ QueryClientProvider, QueryClient } 

1) QueryClient -> help to create the new QueryClient
syntax -> 
    const queryClient = new QueryClient();

2) QueryClientProvider -> this component provide the queryClient which we created at point 1
syntax -> 
    <QueryClientProvider client={queryClient} >
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

3) ReactQueryDevtools -> this is inbuilt devtool which used to visualize the data in our code(We use this in point 2)
import ->  
    import {ReactQueryDevtools} from 'react-query/devtools'
syntax ->
    <ReactQueryDevtools initialIsOpen={false} />

# 3 Core Concept in React-Query

## Queries
## Mutation
## Query Validation

# Queries (useQuery)
1) useQuery is used to while geting the data from the server
2) useQuery takes three parameter 
3) firstParemeter -> the unique identifier which we put in string but inside it converted in array so technically you can write the array there
2) secondParemeter -> The Second Paremeter is the function which responsible to fetch or get the data its async function which we return the data
3) ThirdParameter -> The third parameter is optional which we set in some cases

import -> 
    import {useQuery} from 'react-query';
syntax -> 
    const query = useQuery('unique-key', getPost, {optional (remember this is an object)})

#
##
###
**Note**
[]