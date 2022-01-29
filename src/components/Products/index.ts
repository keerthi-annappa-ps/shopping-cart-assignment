import { compose } from "recompose";
import { connect } from "react-redux";
import { getProducts, getCategories } from "../../actions/index";
import {
  selectCategories,
  selectProducts,
  isProductsLoaded,
} from "../../selectors/catalog";
import { IState } from "@typings/state/index";
import Products, { Props } from "./Products";

const mapStateToProps = (state: IState) => ({
  products: selectProducts(state),
  categories: selectCategories(state),
  productLoaded: isProductsLoaded(state),
});

const actions = { getProducts, getCategories };

export default compose<Props, {}>(connect(mapStateToProps, actions))(Products);
