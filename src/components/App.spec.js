import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import axiosMock from 'axios';
import store from '../redux/store';
import theme from '../styled/theme';
import App from './App';
import mockResultsDefault from '../mock-data/results-default';

jest.mock('axios');

const renderComponent = () =>
  render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </Provider>
  );

afterEach(() => {
  jest.clearAllMocks();
});

test('renders a logo', () => {
  axiosMock.get.mockResolvedValueOnce({ data: mockResultsDefault });
  const { getByAltText } = renderComponent();
  const logo = getByAltText('NASA Logo');
  expect(logo).toBeTruthy();
});
