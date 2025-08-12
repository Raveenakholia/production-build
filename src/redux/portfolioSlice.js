/** @format */

// src/redux/projectSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A React-based portfolio with Redux and Bootstrap.',
      link: 'https://your-site.netlify.app',
    },
    {
      id: 2,
      title: 'Todo App',
      description: 'A minimal CRUD todo app using React and Redux.',
      link: '#',
    },
  ],
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
});

export default projectSlice.reducer;
