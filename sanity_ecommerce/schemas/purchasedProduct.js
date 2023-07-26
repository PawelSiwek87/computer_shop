export default {
  name: 'purchasedProduct',
  title: 'PurchasedProduct',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      }
    },
    { 
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    { 
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    { 
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    { 
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
    },
    { 
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    { 
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    { 
      name: 'userOwner',
      title: 'UserOwner',
      type: 'string',
    }
  ]
}