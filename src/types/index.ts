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
