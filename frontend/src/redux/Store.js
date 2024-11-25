import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './AuthSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { PERSIST} from 'redux-persist';

// Configure Redux Persist
const persistConfig = {
    key: 'root',
    storage,
};

// Persist the Auth slice
const persistedReducer = persistReducer(persistConfig, AuthSlice);

// Configure the store
export const store = configureStore({
    reducer: {
        Auth: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [ PERSIST],
            },
        }),
});

// Export persistor for PersistGate
export const persistor = persistStore(store);
