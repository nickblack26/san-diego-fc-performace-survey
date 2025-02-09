import * as React from 'react';
import { DataTable } from '@/components/ui/data-table';
import columns from '@/components/columns/players';
import { getPlayers, getTeams } from '@/utils/read';
import * as Label from '@/components/ui/label';
import * as Select from '@/components/ui/select';
import FilterSelect from '@/components/filter-select';

export default async function Page() {
	const players = await getPlayers();
	const teams = await getTeams();

	return (
		<main className='h-full space-y-3'>
			<h1 className='text-title-h5 font-semibold'>All Players</h1>

			<div className='flex gap-6 w-full'>
				<DataTable
					columns={columns}
					data={players}
				/>

				<aside className='w-1/6 space-y-3'>
					<h4 className='font-semibold'>Filters</h4>

					<div className='flex flex-col gap-1'>
						<Label.Root htmlFor='team'>Team</Label.Root>

						<Select.Root>
							<Select.Trigger id='team'>
								<Select.Value placeholder='Select a team...' />
							</Select.Trigger>

							<Select.Content>
								{teams.map((item) => (
									<FilterSelect
										key={item.name}
										item={item}
									/>
								))}
							</Select.Content>
						</Select.Root>
					</div>

					<div className='flex flex-col gap-1'>
						<Label.Root htmlFor='position'>Position</Label.Root>

						<Select.Root>
							<Select.Trigger id='position'>
								<Select.Value placeholder='Select a position...' />
							</Select.Trigger>

							<Select.Content>
								<Select.Item value={'Goalkeeper'}>Goalkeeper</Select.Item>
								<Select.Item value={'Defender'}>Defender</Select.Item>
								<Select.Item value={'Midfielder'}>Midfielder</Select.Item>
							</Select.Content>
						</Select.Root>
					</div>
				</aside>
			</div>
		</main>
	);
}
