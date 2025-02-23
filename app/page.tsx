import * as React from 'react';
import { getPlayers } from '@/utils/read';
import * as Avatar from '@/components/ui/avatar';
import SuveryDropdown from './survery-dropdown';
import { Label } from '@/components/ui/dropdown';
import { DataTable } from '@/components/ui/data-table';
import columns from '@/components/columns/players';
import { cultureHelperText, performanceHelperText } from '@/utils/text';
import Image from 'next/image';

export default async function Page() {
	const players = await getPlayers();

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

				<h1 className='text-title-h5 font-bold sm:text-title-h4'>
					Culture and Performance Weekly Survey
				</h1>
			</header>

			<h1 className='text-title-h5 font-semibold px-6 pt-6'>
				All Players
			</h1>

			<section className='p-6 space-y-6 sm:hidden'>
				{players.map((player) => (
					<div
						key={player.id}
						className='space-y-3'
					>
						<div className='flex items-center gap-3'>
							<Avatar.Root size='40'>
								<Avatar.Image src={player.photoUrl} />
							</Avatar.Root>

							<div className='flex flex-col gap-0.5'>
								<h2 className='text-label-md text-text-strong-950 dark:text-white'>
									{player.name}
								</h2>

								<p className='text-paragraph-xs text-text-sub-600'>
									{player.position}
								</p>
							</div>
						</div>

						<div className='grid gap-1.5'>
							<div>
								<Label>Culture</Label>

								<SuveryDropdown
									defaultValue={player.surveryValues.culture}
									helperText={cultureHelperText}
								/>
							</div>

							<div>
								<Label>Performance</Label>

								<SuveryDropdown
									defaultValue={
										player.surveryValues.performance
									}
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
					data={players}
				/>
			</section>
		</main>
	);
}
