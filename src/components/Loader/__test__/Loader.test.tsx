import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { LoaderContext } from '../../../contexts/Loader';
import Loader from '../';

describe('Loader Component', () => {
  it('should render loader when loader is true', () => {
    render(
      <LoaderContext.Provider value={{ loader: true, showLoader: jest.fn() }}>
        <Loader />
      </LoaderContext.Provider>
    );
    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });

  it('should not render loader when loader is false', () => {
    render(
      <LoaderContext.Provider value={{ loader: false, showLoader: jest.fn() }}>
        <Loader />
      </LoaderContext.Provider>
    );

    const loaderElement = screen.queryByTestId('loader');
    expect(loaderElement).not.toBeInTheDocument();
  });
});
