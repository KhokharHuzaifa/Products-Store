import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./CartReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { ProductSlice } from "./ProductsReducer";
const persistConfig = {
  key: 'Cartroot',
  storage,
}

const rootReducer = combineReducers({
    CartReducer: CartSlice.reducer,
    ProductReducer: ProductSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
