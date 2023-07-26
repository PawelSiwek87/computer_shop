export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    { 
      name: 'userName',
      title: 'UserName',
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
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    { 
      name: 'password',
      title: 'Password',
      type: 'string',
    }
  ]
}