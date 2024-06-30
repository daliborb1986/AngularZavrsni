// export class Flower {
//     public id: number;
//     public title: string;
//     public imgSrc?: string
// }

export class Flower {
  constructor(
    public id: number,
    public title: string,
    public price: string,
    public imgSrc?: string
  ) {}
}
