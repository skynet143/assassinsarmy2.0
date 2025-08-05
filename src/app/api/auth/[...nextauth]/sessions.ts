import { getServerSession } from 'next-auth/next';
import { authOptions } from './authOptions'; // Import authOptions

// This function fetches the session in server-side requests
export async function getSession(req: Request) {
  const session = await getServerSession(authOptions);
  return session;
}
