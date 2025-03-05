import * as React from 'react';
import { addDays, startOfDay } from 'date-fns';

import Image from 'next/image';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { players } from '@/utils/read';
import { cultureHelperText, performanceHelperText } from '@/utils/text';

import SuveryDropdown from '@/app/survery-dropdown';

import { Label } from '@/components/ui/dropdown';
import { DataTable } from '@/components/ui/data-table';
import columns from '@/components/columns/players';

import { pool } from '@/lib/pg';
import { createSurveryValueRows, SurveyRow } from '@/lib/functions';

export const dynamic = 'force-dynamic';

async function HomePage() {
	const cookieStore = await cookies();

	// Get user cookie
	const user = cookieStore.get('user');

	// If no user cookie, redirect to login
	if (!user) redirect('/login');

	// Create a timestamp for the start of the day
	const startOfToday = startOfDay(new Date());

	// Create a timestamp for the start of the day
	const startOfTomorrow = startOfDay(addDays(new Date(), 1));

	// Assemble the SQL statement
	const statement = `select * from public.survey_values where submission_datetime > to_timestamp(${startOfToday.getTime()} / 1000.0) and submission_datetime < to_timestamp(${startOfTomorrow.getTime()} / 1000.0) order by player;`;

	// Get the rows from the database
	const { rowCount } = await pool.query<SurveyRow>(statement);

	// If no rows, create a new row for each player
	if (!rowCount || rowCount === 0) {
		// Create a new row for each player
		await createSurveryValueRows(
			players.map((p) => ({
				user_id: Number(user.value),
				player: p.name,
			}))
		);
	}

	const { rows } = await pool.query<SurveyRow>(statement);

	return (
		<main>
			<header className='px-6 py-3 border-b flex items-center shrink gap-3'>
				<Image
					src={
						'https://images.mlssoccer.com/image/upload/t_q-best/v1736287039/assets/sdn/logos/sd_logo_pri_fc_rgb_480x480__1__720_1_jlm4tx.png'
					}
					alt='San Diego FC Logo'
					width={50}
					height={50}
					className='object-contain'
				/>

				<h1 className='text-title-h5 font-bold sm:text-title-h4'>Culture and Performance Weekly Survey</h1>
			</header>

			<h1 className='text-title-h5 font-semibold px-6 pt-6'>All Players</h1>

			<section className='p-6 space-y-6 sm:hidden'>
				{rows.map((player) => (
					<div
						key={`mobile-${player.id}`}
						className='space-y-3'
					>
						<div className='flex items-center gap-3'>
							<div className='flex flex-col gap-0.5'>
								<h2 className='text-label-md text-text-strong-950 dark:text-white'>{player.player}</h2>
							</div>
						</div>

						<div className='grid gap-1.5'>
							<div>
								<Label>Culture</Label>

								<SuveryDropdown
									id={player.id}
									objectKey='culture_rating'
									defaultValue={player.culture_rating}
									helperText={cultureHelperText}
								/>
							</div>

							<div>
								<Label>Performance</Label>

								<SuveryDropdown
									id={player.id}
									objectKey='performance_rating'
									defaultValue={player.performance_rating}
									helperText={performanceHelperText}
								/>
							</div>
						</div>
					</div>
				))}
			</section>

			<section className='space-y-3 hidden sm:block p-6'>
				<DataTable
					columns={columns}
					data={rows}
				/>
			</section>
		</main>
	);
}

export default HomePage;
