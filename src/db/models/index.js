import Review from "./Review.js";
import Product from "./Product.js";

Product.hasMany(Review);
Review.belongsTo(Product);


export default { Review, Product };