import { Category } from '../model/category';

// DTO: Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CateoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO) {
    const category = new Category();

    Object.assign(category, { name, description, create_at: new Date() });

    this.categories.push(category);
  }
}

export { CateoriesRepository };
