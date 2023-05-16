import '@testing-library/jest-dom';
import RETRIEVE_CART from '../../../queries/Cart';
import multiple from '../../../data/stubs/cart/multiple';
import { MockedProvider } from '@apollo/react-testing';
import { ShopifyCartProvider } from '../../../hooks/useShopifyCart';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import productsStub from '../../../data/stubs/products';
import { CART_COOKIE } from '../../../constants/carts';
import { ProductDetails } from '..';

describe('<ProductDetails />', () => {
  it('displays a product with no variants', () => {
    const noVariantsProduct = productsStub.data.products.nodes[0];
    render(<ProductDetails product={noVariantsProduct} />);

    expect(screen.getByText(/Radiowave Shirt/i)).toBeInTheDocument();
  });

  it('displays a product with variants', () => {
    const variantsProduct = productsStub.data.products.nodes[3];
    render(<ProductDetails product={variantsProduct} />);

    expect(screen.getByText(/Triangulum Hoodie/i)).toBeInTheDocument();
  });

  it('changes the image and the colour at the same time', () => {
    const variantsProduct = productsStub.data.products.nodes[3];
    render(<ProductDetails product={variantsProduct} />);

    expect(screen.getByText(/TRI-1/i)).toBeInTheDocument();
    expect(screen.queryByText(/TRI-2/i)).not.toBeInTheDocument();
    expect(
      screen.getByTestId('variant-option-blue').getAttribute('checked')
    ).toBe('');

    const selectedImage = screen.getByTestId('slide-image-1');
    fireEvent.click(selectedImage);

    expect(screen.queryByText(/TRI-1/i)).not.toBeInTheDocument();
    expect(screen.getByText(/TRI-2/i)).toBeInTheDocument();
    expect(
      screen.getByTestId('variant-option-purple').getAttribute('checked')
    ).toBe('');
  });

  it('changes the colour and the image at the same time', () => {
    const variantsProduct = productsStub.data.products.nodes[3];
    render(<ProductDetails product={variantsProduct} />);

    expect(screen.getByText(/TRI-1/i)).toBeInTheDocument();
    expect(screen.queryByText(/TRI-2/i)).not.toBeInTheDocument();
    expect(
      screen.getByTestId('variant-option-blue').getAttribute('checked')
    ).toBe('');

    const selectedColour = screen.getByTestId('variant-option-purple');
    fireEvent.click(selectedColour);

    expect(screen.queryByText(/TRI-1/i)).not.toBeInTheDocument();
    expect(screen.getByText(/TRI-2/i)).toBeInTheDocument();
    expect(
      screen.getByTestId('variant-option-purple').getAttribute('checked')
    ).toBe('');
  });

  it('disables the button if the amount available is already added to the cart', async () => {
    const retrieveCartMock = {
      request: {
        query: RETRIEVE_CART,
        variables: {
          id: 'gid://shopify/Cart/c1-c63c275d6f27eb309d4efac08dee2e7d',
        },
      },
      result: { data: multiple },
    };

    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: `${CART_COOKIE}=gid://shopify/Cart/c1-c63c275d6f27eb309d4efac08dee2e7d`,
    });

    const variantsProduct = productsStub.data.products.nodes[7];

    render(
      <MockedProvider mocks={[retrieveCartMock]} addTypename={true}>
        <ShopifyCartProvider>
          <ProductDetails product={variantsProduct} />
        </ShopifyCartProvider>
      </MockedProvider>
    );

    waitFor(() => {
      expect(screen.getByText(/Add to cart/i))
        .closest('button')
        .toBeDisabled();
    });
  });
});
