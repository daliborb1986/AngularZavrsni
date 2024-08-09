export class Product {
  public categoryId: string;
  public id: string;
  public title: string;
  public currency: string;
  public price: number;
  public imgSrc: string;
  public description: string;
  public quantity: number;

  constructor(
    categoryId: string,
    id: string,
    title: string,
    currency: string,
    price: number,
    imgSrc: string,
    description: string,
    quantity: number
  ) {
    this.categoryId = categoryId;
    this.id = id;
    this.title = title;
    this.currency = currency;
    this.price = price;
    this.imgSrc = imgSrc;
    this.description = description;
    this.quantity = quantity;
  }
}
