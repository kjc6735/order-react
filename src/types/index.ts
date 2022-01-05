export interface IUser {
  name: string
  phone: string
  groupId: number
  businessNumber: string
  password: string
}

export interface Group {
  id: number
  name: string
}

export type Login = Pick<IUser, 'businessNumber' | 'password'>

export interface Product {
  id: number
  name: string
  origin: string
  price: number
  status: boolean
}

export interface OrderList {
  id: number
  price: number
  tax: boolean
  products: Product[]
  status: boolean
}

// export interface PrderList {
//   id: number
//   products: Product[]
// }
