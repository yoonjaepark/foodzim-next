// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number
  name: string
  phone: string
}

export type Auth = {
  accessToken: string
  signInMethod: string
  email: string
  name: string
  id: string
  locale: string
}