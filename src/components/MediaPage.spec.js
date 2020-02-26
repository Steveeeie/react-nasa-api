import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { render, waitForElement } from '@testing-library/react';
import axiosMock from 'axios';
import store from '../redux/store';
import theme from '../styled/theme';
import MediaPage from './MediaPage';
import mockAssetCollections from '../mock-data/asset-collections';
import mockAssetLocation from '../mock-data/asset-location';
import mockAssetMetadata from '../mock-data/asset-metadata';

jest.mock('axios');

const renderComponent = () =>
  render(
    <Provider store={store}>
      <Router initialEntries={['/asset/hello']}>
        <ThemeProvider theme={theme}>
          <Route path="/asset/:nasaid" component={MediaPage} />
        </ThemeProvider>
      </Router>
    </Provider>
  );

afterEach(() => jest.clearAllMocks());

test('renders the correct content for an Image', async () => {
  axiosMock.get
    .mockResolvedValueOnce({ data: mockAssetCollections })
    .mockResolvedValueOnce({ data: mockAssetLocation })
    .mockResolvedValueOnce({ data: mockAssetMetadata });
  const { getByText, getByAltText } = renderComponent();
  const title = await waitForElement(() => getByText(`Example Title 1`));
  const description = await waitForElement(() => getByText(`Example Description 1`));
  const image = await waitForElement(() => getByAltText(`Example Title 1`));
  expect(title).toBeTruthy();
  expect(description).toBeTruthy();
  expect(image).toBeTruthy();
});
