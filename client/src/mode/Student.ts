export interface Student {
    id: number,
    name: string,
    sex: string;
    age: number,
    photo: string
  }

  export interface PageResp<T>{
    list: T[],
    total: number
  }