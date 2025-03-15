import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const BASE_URL = "";

export const steerifyApi = createApi({
    reducerPath: 'steerifyApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints:(build) => ({
        postSignUp: build.mutation({
            query: (signUp) => ({
                url: '/signUp',
                method: 'POST',
                body: signUp,
            }),
            }),

            postLogIn:build.mutation({
                query: (logIn) => ({
                    url: '/logIn',
                    method: 'POST',
                    body: logIn,
                }),
            }),
    })
})

export const {usePostSignUpMutation, usePostLogInMutation} = steerifyApi;