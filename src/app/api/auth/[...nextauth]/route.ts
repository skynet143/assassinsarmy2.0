import NextAuth from 'next-auth';
import { authOptions } from './authOptions'; // Import authOptions

// Export NextAuth handler with custom authOptions
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
