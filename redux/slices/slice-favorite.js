const { createSlice } = require("@reduxjs/toolkit");

const sliceFavorite = createSlice({
  name: "favorite",
  initialState: {
    saved: [],
    total: 0,
  },
  reducers: {
    ADD_FAVORITE: (state, action) => {
      const movie = action.payload;
      const existingMovie = state.saved?.find((item) => item.id === movie.id);

      if (existingMovie) {
        return;
      } else {
        state.saved.push(movie);
        state.total++;
      }
    },

    REMOVE_FAVORITE: (state, action) => {
      const movieID = action.payload;
      const existingMovie = state.saved?.find((item) => item.id === movieID);

      if (existingMovie) {
        state.saved = state.saved.filter((item) => item.id !== movieID);
        state.total--;
      }
    },
  },
});

export const { ADD_FAVORITE, REMOVE_FAVORITE } = sliceFavorite.actions;

export default sliceFavorite.reducer;
