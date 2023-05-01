import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { CreateProductInput } from '../dtos/inputs/CreateProductInput';
import { Product } from '../dtos/models/ProductModel';

const products: Product[] = [];

@Resolver(() => Product)
export class ProductResolver {
  @Query(() => [Product])
  async products() {
    return products;
  }

  @Mutation(() => Product)
  async createProduct(@Arg('Data') data: CreateProductInput) {
    const product = {
      name: data.name,
    };

    products.push(product);

    return product;
  }
}
