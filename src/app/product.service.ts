import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class FlowerService {
  products: Product[] = [
    new Product(
      'sympathy',
      1,
      'Beautiful Spirit Basket',
      '$',
      105,
      '/assets/products/simpathy/product1.PNG',

      'Let them know how much you care with a gorgeous bouquet that features carnations, stock, roses, lilies and Fuji mums. Each bloom is a thoughtful reminder of your support and love, while sitting in a beautifully crafted basket.',1
    ),
    new Product(
      'sympathy',
      2,
      'The Spathiphyllum Plant',
      '$',
      80,
      '/assets/products/simpathy/product2.PNG',

      'Everyone could use a little peace in their life! Commonly known as the peace lily, our spathiphyllum plant is a favorite among just about everyone and perfect for every occasion. This beautiful plant is long–lasting and has an amazing effect on any room with its lush leaves and white flowers.',1
    ),
    new Product(
      'sympathy',
      3,
      'Comfort Planter',
      '$',
      66,
      '/assets/products/simpathy/product3.PNG',

      'The Comfort Planter offers unspoken words of hope and peace during this time of loss and sadness. Our stylish and sophisticated white ceramic planter holds an elegant 6" peace lily plant, which exhibits brilliant white tear-shaped blooms amongst dark green foliage for a simply beautiful effect.',1
    ),
    new Product(
      'sympathy',
      4,
      'Eternal Friendship Bouquet',
      '$',
      100,
      '/assets/products/simpathy/product4.PNG',

      'An exuberance of bright and beautiful white blossoms provides an exquisite way to deliver your expressions of sympathy and comfort. This life affirming tribute combines white roses, snapdragons and Asiatic lilies accented by lush greens arranged in a clear glass 8" vase. An excellent choice for a wake, funeral service or for sending your condolences to the home of grieving family or friends.',1
    ),
    new Product(
      'sympathy',
      5,
      'Long Stem Pink Rose Bouquet',
      '$',
      200,
      '/assets/products/simpathy/product5.PNG',

      'Enjoy the classic beauty of the rose with a playful twist in our Long Stem Pink Rose Bouquet. This arrangement features all pink roses that will look especially pretty in the hands of those you cherish most.',1
    ),
    new Product(
      'sympathy',
      6,
      'Clear Skies Bouquet',
      '$',
      135,
      '/assets/products/simpathy/product6.PNG',

      'Let this uplifting arrangement be reminders of the clear skies ahead. Capturing the feeling of hope that a new day brings, this bouquet is composed of voluminous hydrangea blooms and vibrant belladonna delphinium to refresh their mood.',1
    ),
    new Product(
      'sympathy',
      7,
      'Beyond Blue Bouquet',
      '$',
      92,
      '/assets/products/simpathy/product7.PNG',

      'There is something about the shade of blue that brings a sense of calmness and serenity. Our Beyond Blue bouquet is designed with billowing white blooms and pops of bold florals to deliver just the right sentiment for any reason.',1
    ),
    new Product(
      'sympathy',
      8,
      'Alluring Elegance Bouquet',
      '$',
      115,
      '/assets/products/simpathy/product8.PNG',

      "An illuminating array of florals brings an air of elegance to any room it's placed. This arrangement features refined florals like lilies, Queen Anne's Lace and Veronica in a clear glass vase to add a touch of sophisticated style to your special occasions.",1
    ),
    new Product(
      'sympathy',
      9,
      'Beach House Bouquet',
      '$',
      125,
      '/assets/products/simpathy/product9.PNG',

      'Take yourself on a seaside getaway with our Beach House Bouquet. The calming blue hydrangea is the perfect pair for the peach carnations and roses. Enjoy the fun lavender button pompons as a colorful contrast to the classic blooms.',1
    ),
    new Product(
      'sympathy',
      10,
      'Pastel Peace Basket',
      '$',
      105,
      '/assets/products/simpathy/product10.PNG',

      'The Pastel Peace Basket is a sweet and simple way to offer your condolences. Lavender roses, fuchsia gerbera daisies, lavender daisies, purple larkspur, purple matsumoto asters, pink mini carnations and lush greens are arranged to perfection in a round whitewash handled basket to create a gift that expresses your wishes for sympathy and peace.',1
    ),
    new Product(
      'sympathy',
      11,
      'Picnic Tulips',
      '$',
      70,
      '/assets/products/simpathy/product11.PNG',

      "Celebrate mom with the classic beauty of our Picnic Tulips. These captivating colors shine brightest in spring around fun birthdays, anniversaries and as a Mother's Day surprise.",1
    ),
    new Product(
      'sympathy',
      12,
      'Sunshine & Joy Garden',
      '$',
      65,
      '/assets/products/simpathy/product12.PNG',

      'The color yellow expresses happiness, imagination and fun, as does this garden! The perfect present for anyone on any occasion, this plant is filled to the brim with smiles. This garden is overflowing with a collection of two yellow Kalanchoes, a golden Pothos and a Croton plant. The flowers may arrive in buds, only to bloom in a short time.',1
    ),
    new Product(
      'anniversary',
      13,
      'Truly Stunning Bouquet',
      '$',
      108,
      '/assets/products/anniversary/product18.PNG',

      'This dreamy jewel toned bouquet combines bold color and eye catching texture to make a statement. Featuring a thoughtful array of both roses and lilies, this dazzling assortment is bound to impress your recipient.',1
    ),
    new Product(
      'anniversary',
      14,
      "You're Precious Bouquet",
      '$',
      90,
      '/assets/products/anniversary/product19.PNG',

      "Blushing shades of pink blooms are nestled in lush greens to charm anyone's day. This bouquet is abundant with a classic assortment of pretty florals – roses, alstroemeria and carnations to name a few.",1
    ),
    new Product(
      'anniversary',
      15,
      'Long Stem Red Rose Bouquet',
      '$',
      200,
      '/assets/products/anniversary/product20.PNG',

      'You can never go wrong with a bouquet of hand delivered long stem red roses from a local florist. Let our network of expert florists design this timeless red bouquet to make a statement for your special someone. Red flowers are an elegant, iconic and romantic gift for anyone close to your heart. Each rose is handcrafted and hand delivered to say I love you directly from a local florist to their home or office.',1
    ),
    new Product(
      'anniversary',
      16,
      'Pretty in Pink Belgian Chocolate Truffles',
      '$',
      45,
      '/assets/products/anniversary/product21.PNG',

      'Send a little piece of your heart with the Pretty in Pink Truffles. Adorably designed in heart shapes with a pink and red coating for the holiday of love, this treat comes neatly packaged with 15 truffles aligned with their shade of pink.',1
    ),
    new Product(
      'anniversary',
      17,
      "Valentine's Day Belgian Chocolate Covered Treat Sampler",
      '$',
      45,
      '/assets/products/anniversary/product22.PNG',

      "Don’t make that special someone chose this February, and send the Valentine's Day Belgian Chocolate Covered Treat Sampler instead. Try an assortment of holiday treats such as chocolate-dipped Rice Krispie® treats, chocolate cookies, mini chocolate pretzel twists, and more.",1
    ),
    new Product(
      'congratulations',
      18,
      'Bliss White Orchid',
      '$',
      68,
      '/assets/products/congrulations/product23.PNG',

      'The most popular variety of this plant, the Phalaenopsis orchid makes a great gift for plant lovers and plant beginners alike! White orchids are easy to care for and add a touch of delicate beauty to any home, office or table.',1
    ),
    new Product(
      'congratulations',
      19,
      'CLASSIC WHITE CALLA LILY',
      '$',
      58,
      '/assets/products/congrulations/product24.PNG',

      'This houseplant is great for making every day bright. Whether perched on a windowsill or gifted to a friend in need of a smile, the pure white tones and healthy greenery add a delicate touch to any space. This plant loves rich soil and plenty of sun.',1
    ),
    new Product(
      'congratulations',
      20,
      'SPRING FLING TULIP BULB GARDEN',
      '$',
      45,
      '/assets/products/congrulations/product25.PNG',

      'Grow a pop of color for the changing season with the Assorted Spring Tulip Garden blooming pink, yellow and purple flowers. Nothing revitalizes a space like fresh flowers. Packed with bold bell-shaped blooms, this bulb garden is the perfect gift for any occasion.',1
    ),
    new Product(
      'congratulations',
      21,
      'CONGRATS BELGIAN CHOCOLATE COVERED BERRY GRAM',
      '$',
      55,
      '/assets/products/congrulations/product26.PNG',

      'Artisan Crafted Belgian Chocolate Covered Treats Crafted in a Small Batch Kitchen 12 Strawberries Hand Dipped in Belgian Dark Chocolate Hand Decorated with drizzles and White Chocolate Letters spelling out ""CONGRATS"" Arrives in an Elegant Gift Box',1
    ),
    new Product(
      'getwell',
      22,
      'Fiesta Bouquet',
      '$',
      95,
      '/assets/products/get-well/product13.PNG',

      'The Fiesta Bouquet is composed of a lively mix, fit to celebrate any and every moment. With a combination of vibrant flowers, this florist–designed arrangement brings a pop of color and a burst of excitement as soon as it arrives.',1
    ),
    new Product(
      'getwell',
      23,
      'Alluring Elegance Bouquet',
      '$',
      115,
      '/assets/products/get-well/product14.PNG',

      "An illuminating array of florals brings an air of elegance to any room it's placed. This arrangement features refined florals like lilies, Queen Anne's Lace and Veronica in a clear glass vase to add a touch of sophisticated style to your special occasions.",1
    ),
    new Product(
      'getwell',
      24,
      'Beyond Blue Bouquet',
      '$',
      92,
      '/assets/products/get-well/product15.PNG',

      'There is something about the shade of blue that brings a sense of calmness and serenity. Our Beyond Blue bouquet is designed with billowing white blooms and pops of bold florals to deliver just the right sentiment for any reason.',1
    ),
    new Product(
      'getwell',
      25,
      'Clear Skies Bouquet',
      '$',
      135,
      '/assets/products/get-well/product16.PNG',

      'Let this uplifting arrangement be reminders of the clear skies ahead. Capturing the feeling of hope that a new day brings, this bouquet is composed of voluminous hydrangea blooms and vibrant belladonna delphinium to refresh their mood.',1
    ),

    new Product(
      'getwell',
      26,
      'Light of My Life Bouquet',
      '$',
      80,
      '/assets/products/get-well/product17.PNG',

      'The Light of My Life Bouquet blossoms with brilliant color and a sweet sophistication to create the perfect impression! Pink Lilies make the eyes dance across the unique design of this flower bouquet, surrounded by the blushing colors of orange roses, lavender cushion poms, hot pink carnations, and lush greens. Presented in a clear glass vase, this fresh flower arrangement has been created just for you to help you send your sweetest thank you, happy anniversary, or thinking of you wishes.',1
    ),
  ];

  getProductByCategory(category: string): Product[] {
    return this.products.filter((product) => product.categoryId === category);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }
}
