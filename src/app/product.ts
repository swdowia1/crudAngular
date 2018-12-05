import { Category } from "./category";
import { MayHaveId } from './may-have-id';

// Product class to define this object's properties.
export class Product extends MayHaveId {
    constructor(

        public name: string,
        public price: number,
        public description: string,
        public category: Category
    ) {
        super();
    }
}