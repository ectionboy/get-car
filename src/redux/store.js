    import { configureStore } from '@reduxjs/toolkit';
    import storage from 'redux-persist/lib/storage';
    import { rootReducer } from './reducer';
    import {
      persistStore,
      persistReducer,
      FLUSH,
      REHYDRATE,
      PAUSE,
      PERSIST,
      PURGE,
      REGISTER,
    } from 'redux-persist';
    
    const persistConfig = {
      key: 'root',
      storage,
    };
    
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    
    export const store = configureStore({
      reducer: persistedReducer,
      middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    });
    
    export const persistor = persistStore(store);