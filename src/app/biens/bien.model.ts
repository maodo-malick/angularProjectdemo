export  interface Bien {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  sale: boolean;
  createAt: Date;
  state: number;
}
