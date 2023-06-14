export const cartMultiple = {
  cart: {
    id: 'gid://shopify/Cart/c1-74d26c3130aa39e303d99d4d430c6eca',
    createdAt: '2023-06-11T13:08:53Z',
    updatedAt: '2023-06-12T08:56:59Z',
    checkoutUrl:
      'https://blueprintbetatest.myshopify.com/cart/c/c1-74d26c3130aa39e303d99d4d430c6eca',
    totalQuantity: 3,
    lines: {
      nodes: [
        {
          id: 'gid://shopify/CartLine/4d7efdf2-e95c-4792-b55d-914e3626f6e6?cart=c1-74d26c3130aa39e303d99d4d430c6eca',
          quantity: 1,
          merchandise: {
            id: 'gid://shopify/ProductVariant/44876466749743',
            sku: 'TRI-1',
            title: 'Blue',
            image: {
              url: 'https://cdn.shopify.com/s/files/1/0695/2478/3407/products/hoodie-blue.jpg?v=1681383898',
              altText: null,
              __typename: 'Image',
            },
            product: {
              id: 'gid://shopify/Product/8235118264623',
              handle: 'triangulum-hoodie',
              title: 'Triangulum Hoodie',
              __typename: 'Product',
            },
            __typename: 'ProductVariant',
          },
          cost: {
            amountPerQuantity: {
              amount: '35.0',
              __typename: 'MoneyV2',
            },
            totalAmount: {
              amount: '35.0',
              __typename: 'MoneyV2',
            },
            __typename: 'CartLineCost',
          },
          attributes: [],
          __typename: 'CartLine',
        },
        {
          id: 'gid://shopify/CartLine/6c352a88-0f39-4015-8d75-d3fa2ef1ba92?cart=c1-74d26c3130aa39e303d99d4d430c6eca',
          quantity: 1,
          merchandise: {
            id: 'gid://shopify/ProductVariant/44876453544239',
            sku: 'TPG-1',
            title: 'Default Title',
            image: {
              url: 'https://cdn.shopify.com/s/files/1/0695/2478/3407/products/shirt-gray_2717712f-efe9-443b-a417-dc074b129a14.jpg?v=1681383619',
              altText: null,
              __typename: 'Image',
            },
            product: {
              id: 'gid://shopify/Product/8235111022895',
              handle: 'topography-shirt',
              title: 'Topography Shirt',
              __typename: 'Product',
            },
            __typename: 'ProductVariant',
          },
          cost: {
            amountPerQuantity: {
              amount: '20.0',
              __typename: 'MoneyV2',
            },
            totalAmount: {
              amount: '20.0',
              __typename: 'MoneyV2',
            },
            __typename: 'CartLineCost',
          },
          attributes: [],
          __typename: 'CartLine',
        },
        {
          id: 'gid://shopify/CartLine/f182bbf2-865a-4607-9cd2-1abba0fa4f29?cart=c1-74d26c3130aa39e303d99d4d430c6eca',
          quantity: 1,
          merchandise: {
            id: 'gid://shopify/ProductVariant/44876574720303',
            sku: 'TCC-1',
            title: 'Default Title',
            image: {
              url: 'https://cdn.shopify.com/s/files/1/0695/2478/3407/products/hat-2.jpg?v=1681385139',
              altText: null,
              __typename: 'Image',
            },
            product: {
              id: 'gid://shopify/Product/8235141300527',
              handle: 'toasty-cap-cotton',
              title: 'Toasty Cap Cotton',
              __typename: 'Product',
            },
            __typename: 'ProductVariant',
          },
          cost: {
            amountPerQuantity: {
              amount: '20.0',
              __typename: 'MoneyV2',
            },
            totalAmount: {
              amount: '20.0',
              __typename: 'MoneyV2',
            },
            __typename: 'CartLineCost',
          },
          attributes: [],
          __typename: 'CartLine',
        },
      ],
      __typename: 'CartLineConnection',
    },
    attributes: [],
    cost: {
      totalAmount: {
        amount: '75.0',
        currencyCode: 'USD',
        __typename: 'MoneyV2',
      },
      subtotalAmount: {
        amount: '75.0',
        currencyCode: 'USD',
        __typename: 'MoneyV2',
      },
      totalTaxAmount: null,
      totalDutyAmount: null,
      __typename: 'CartCost',
    },
    __typename: 'Cart',
  },
};

export const removeFromMultipleCart = {
  cartLinesRemove: {
    cart: {
      id: 'gid://shopify/Cart/c1-74d26c3130aa39e303d99d4d430c6eca',
      createdAt: '2023-06-11T13:08:53Z',
      updatedAt: '2023-06-13T10:56:42Z',
      checkoutUrl:
        'https://blueprintbetatest.myshopify.com/cart/c/c1-74d26c3130aa39e303d99d4d430c6eca',
      totalQuantity: 2,
      lines: {
        nodes: [
          {
            id: 'gid://shopify/CartLine/2d32bd90-bc50-4e74-a785-8919b87ef96e?cart=c1-74d26c3130aa39e303d99d4d430c6eca',
            quantity: 1,
            merchandise: {
              id: 'gid://shopify/ProductVariant/44876453544239',
              sku: 'TPG-1',
              title: 'Default Title',
              image: {
                url: 'https://cdn.shopify.com/s/files/1/0695/2478/3407/products/shirt-gray_2717712f-efe9-443b-a417-dc074b129a14.jpg?v=1681383619',
                altText: null,
                __typename: 'Image',
              },
              product: {
                id: 'gid://shopify/Product/8235111022895',
                handle: 'topography-shirt',
                title: 'Topography Shirt',
                __typename: 'Product',
              },
              __typename: 'ProductVariant',
            },
            cost: {
              amountPerQuantity: {
                amount: '20.0',
                __typename: 'MoneyV2',
              },
              totalAmount: {
                amount: '20.0',
                __typename: 'MoneyV2',
              },
              __typename: 'CartLineCost',
            },
            attributes: [],
            __typename: 'CartLine',
          },
          {
            id: 'gid://shopify/CartLine/f22360d5-44c2-4304-b27e-16c90997853d?cart=c1-74d26c3130aa39e303d99d4d430c6eca',
            quantity: 1,
            merchandise: {
              id: 'gid://shopify/ProductVariant/44876574720303',
              sku: 'TCC-1',
              title: 'Default Title',
              image: {
                url: 'https://cdn.shopify.com/s/files/1/0695/2478/3407/products/hat-2.jpg?v=1681385139',
                altText: null,
                __typename: 'Image',
              },
              product: {
                id: 'gid://shopify/Product/8235141300527',
                handle: 'toasty-cap-cotton',
                title: 'Toasty Cap Cotton',
                __typename: 'Product',
              },
              __typename: 'ProductVariant',
            },
            cost: {
              amountPerQuantity: {
                amount: '20.0',
                __typename: 'MoneyV2',
              },
              totalAmount: {
                amount: '20.0',
                __typename: 'MoneyV2',
              },
              __typename: 'CartLineCost',
            },
            attributes: [],
            __typename: 'CartLine',
          },
        ],
        __typename: 'CartLineConnection',
      },
      attributes: [],
      cost: {
        totalAmount: {
          amount: '40.0',
          currencyCode: 'USD',
          __typename: 'MoneyV2',
        },
        subtotalAmount: {
          amount: '40.0',
          currencyCode: 'USD',
          __typename: 'MoneyV2',
        },
        totalTaxAmount: null,
        totalDutyAmount: null,
        __typename: 'CartCost',
      },
      __typename: 'Cart',
    },
    userErrors: [],
    __typename: 'CartLinesRemovePayload',
  },
};
