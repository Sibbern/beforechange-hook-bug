import type { CollectionConfig } from 'payload'

export const Test: CollectionConfig = {
  slug: 'test',
  labels: {
    singular: 'test',
    plural: 'tests',
  },
  hooks: {
    beforeChange: [
      async ({ context, data, operation }) => {

        data.title = 'newdata'
        data.test1 = 'newdata'
        data.test2 = 'newdata'

        return data
      },
    ],
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'test1',
      label: 'test1',
      type: 'text',
      required: true,
    },
    {
      name: 'test2',
      label: 'test2',
      type: 'text',
      required: true,
    },
  ],
}
