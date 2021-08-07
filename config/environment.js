// export const port = 4000
// export const dbURI = 'mongodb://localhost/workspaceapi' //! get the name for database after last slash // 1.1

// //! 19.0
// export const secret = 'our tiny smallest ever secret'

import dotenv from 'dotenv'
dotenv.config()

export const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/workspaceapi/'
export const port = process.env.PORT || 4000
export const secret = process.env.SECRET || 'shhhh its a secret'