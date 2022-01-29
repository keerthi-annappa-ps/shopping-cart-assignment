

import { put, all, takeLatest } from 'redux-saga/effects';
import { getCart as fetchCart } from '@api/cart';
import {
  GET_CART
} from '../constants';
import * as actions from '../actions';


function* getCart() {
  try {
    const cart = yield fetchCart();

    yield put(actions.getCartSuccess(cart.data));
  } catch(e) {
    yield put(actions.getCartFail('COULD NOT GET CART'));
  }
}

export default function*() {
    yield all([
      takeLatest(GET_CART, getCart)
    ]);
}
  