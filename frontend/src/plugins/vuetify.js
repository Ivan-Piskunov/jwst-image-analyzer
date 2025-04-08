// src/plugins/vuetify.js
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Стиль по умолчанию

export default createVuetify({
  theme: {
    defaultTheme: 'light', // Или 'dark' для темной темы
  },
});
