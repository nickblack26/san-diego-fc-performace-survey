'use server';

import { revalidatePath } from 'next/cache';

export const savePlayerSurvey = async (formData: FormData) => {
	const contributionTowardsTeamCulture = formData.get('contributionTowardsTeamCulture') as string;
	const onFieldPerformance = formData.get('onFieldPerformance') as string;

	console.log(contributionTowardsTeamCulture, onFieldPerformance);

	revalidatePath('/');
};
