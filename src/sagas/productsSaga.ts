import { put, all, takeLatest } from "redux-saga/effects";
import { fetchCategories } from "../api/categories";
import { fetchProducts } from "../api/products";
import {
  GET_CATEGORIES,
  GET_CATEGORIES_FAIL,
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
} from "../constants";
import * as actions from "../actions";

function* getCategories() {
  try {
    const categories = yield fetchCategories();

    yield put(actions.getCategoriesSuccess(categories.data));
  } catch (e) {
    yield put(actions.getCartFail(GET_CATEGORIES_FAIL));
  }
}

function* getProducts() {
  try {
    const products = yield fetchProducts();

    yield put(actions.getProductsSuccess(products.data));
  } catch (e) {
    yield put(actions.getProductsFail(GET_PRODUCTS_FAIL));
  }
}

export default function* () {
  yield all([
    takeLatest(GET_CATEGORIES, getCategories),
    takeLatest(GET_PRODUCTS, getProducts),
  ]);
}
