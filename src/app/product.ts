export class Product {
  public categoryId: string;
  public id: number;
  public title: string;
  public currency: string;
  public price: number;
  public imgSrc: string;
  public description: string;

  constructor(
    categoryId: string,
    id: number,
    title: string,
    currency: string,
    price: number,
    imgSrc: string,
    description: string
  ) {
    this.categoryId = categoryId;
    this.id = id;
    this.title = title;
    this.currency = currency;
    this.price = price;
    this.imgSrc = imgSrc;
    this.description = description;
  }
}
