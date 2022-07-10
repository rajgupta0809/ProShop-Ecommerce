import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Raj Gupta',
    email: 'raj@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Annu Gupta',
    email: 'annu@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
