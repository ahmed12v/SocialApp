export interface Root {
  message: string
  user: User
}

export interface User {
  _id: string
  name: string
  email: string
  dateOfBirth: string
  gender: string
  photo: string
  createdAt: string
}