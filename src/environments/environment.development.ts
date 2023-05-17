import { commonEnv } from "./environment.common";

export const environment = {
    ...commonEnv,
    production:true,
    apiUrl:'https://jsonplaceholder.typicode.com/users'
};
