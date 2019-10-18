
// "?" will make parts of the interface optional 
export interface User {
  firstName: string,
  lastName: string,
  age?: number,
  address?: {
    street?: string,
    city?: string,
    state?: string,
  },
  
  // used for class binding
  isActive?: boolean

  // registered date for the user
  registered?: any

}