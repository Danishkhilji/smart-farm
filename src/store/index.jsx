// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

// Define the persistConfig with the storage and key configuration
const persistConfig = {
  key: 'root', // Change the key as per your preference
  storage, // The storage mechanism (localStorage)
};

// Create the persisted reducer by wrapping the rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
});

// Create the persisted store
const persistor = persistStore(store);

export { store, persistor };