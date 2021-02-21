export interface IProject {
  name: string,
  description: string,
  endDate: string,
  photos: Array<string>
}

export interface IAdmin {
  login: string,
  password: string
}
