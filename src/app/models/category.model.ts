export interface Category {
  id:    number;
  name:  string;
  image: string;
}

export enum AccessType {
  PRIVATE = 'private',
  PUBLIC = 'public'
}
