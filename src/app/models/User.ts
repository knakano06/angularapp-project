
// ? will make parts of the interface optional 
export interface User {
  firstName: string,
  lastName: string,
  age?: number,
  address?: {
    street?: string,
    city?: string,
    state?: string,
  }
}