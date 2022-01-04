import axios from 'axios'
import { IUser, Login } from '../types'

const client = axios.create({
  // baseURL: 'http://localhost:3000',
  // //process.env.NODE_ENV === 'dev' ? 'http://localhost:3000' : 'example.com',
})

export function fetchProduct() {
  return client.get('/group-product')
}

export function order() {
  return client.post('/order', {})
}

export async function fetchGroup() {
  const response = await client.get('/groups')
  return response.data
}

export async function register(data: IUser): Promise<any> {
  const response = await client.post('/users', data)
  return response.data
}

export async function login(data: Login) {
  const response = await client.post('/users/login', data, {})
  return response.data
}

//프록시서버면 쿠키 공유 가능하다. 
//포트가 다르면 쿠키공유 불가능..해결책 -> {withCridential:true} 옵션 줘야함
