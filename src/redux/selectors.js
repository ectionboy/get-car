export const getCars = state => state.cars.items;
export const getIsLoading = state => state.cars.isLoading;
export const getError = state => state.cars.error;

export const getStatusFilter = (state) => state.filter;

export const getFavorites = (state) => state.favorites.items;
export const getIsLoadingFavorites = (state) => state.favorites.isLoading;
export const getErrorFavorites = (state) => state.favorites.error;