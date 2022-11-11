import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';
import themeReducer from './themSlice'



const persistConfig = {
    key: 'persistedData',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel1,
  };

  const reducers = combineReducers({
    appTheme: themeReducer
  });

  const _persistedReducer = persistReducer(persistConfig, reducers);

  export const store = configureStore({
    reducer: _persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        /* ignore persistance actions */
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER
        ],
      },
    }),
  });

// export const store = configureStore({
//   reducer: {
//       appTheme: themeSlice
//   },
// })