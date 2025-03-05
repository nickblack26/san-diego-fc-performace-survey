'use server';
import { cookies } from 'next/headers';

export const updateLastUpdatedCookie = async (date: string) => {
	const cookieStore = await cookies();
	cookieStore.set('lastCreatedDate', date);
};
