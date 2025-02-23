'use client';
import * as React from 'react';
import { RiMore2Line } from '@remixicon/react';
import { ColumnDef } from '@tanstack/react-table';
import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import { getSortingIcon } from '@/utils/icon';
import PlayerSurveyForm from '../forms/player-survey';
import SuveryDropdown from '@/app/survery-dropdown';
import { cultureHelperText, performanceHelperText } from '@/utils/text';

export type Team = {
	name: string;
	image: string[];
};

export type Player = {
	id: string;
	name: string;
	position: string;
	photoUrl: string;
	surveryValues: {
		culture: number;
		performance: number;
	};
	team: Team;
	status: {
		variant: 'completed' | 'pending' | 'failed' | 'disabled';
		label: string;
	};
};

const columns: ColumnDef<Player>[] = [
	{
		id: 'name',
		accessorKey: 'name',
		header: ({ column }) => (
			<div className='flex items-center gap-0.5'>
				Member Name
				<button
					type='button'
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}
				>
					{getSortingIcon(column.getIsSorted())}
				</button>
			</div>
		),
		enableSorting: true,
		cell: ({ row }) => (
			<PlayerSurveyForm player={row.original}>
				<div className='flex items-center gap-3'>
					<Avatar.Root size='40'>
						<Avatar.Image src={row.original.photoUrl} />
					</Avatar.Root>

					<div className='flex flex-col gap-0.5'>
						<span className='text-label-sm text-text-strong-950'>
							{row.original.name}
						</span>
						<span className='text-paragraph-xs text-text-sub-600'>
							{row.original.position}
						</span>
					</div>
				</div>
			</PlayerSurveyForm>
		),
	},
	{
		id: 'surveryValues',
		accessorKey: 'surveryValues.culture',
		header: ({ column }) => (
			<div className='flex items-center gap-0.5'>
				Culture Rating
				<button
					type='button'
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}
				>
					{getSortingIcon(column.getIsSorted())}
				</button>
			</div>
		),
		enableSorting: true,
		cell: ({ row }) => {
			return (
				<SuveryDropdown
					defaultValue={row.original.surveryValues.culture}
					helperText={cultureHelperText}
				/>
			);
		},
	},
	{
		id: 'surveryValues',
		accessorKey: 'surveryValues.performance',
		header: ({ column }) => (
			<div className='flex items-center gap-0.5'>
				Performance Rating
				<button
					type='button'
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}
				>
					{getSortingIcon(column.getIsSorted())}
				</button>
			</div>
		),
		enableSorting: true,
		cell: ({ row }) => {
			return (
				<SuveryDropdown
					defaultValue={row.original.surveryValues.performance}
					helperText={performanceHelperText}
				/>
			);
		},
	},
	// {
	// 	id: 'position',
	// 	accessorKey: 'position',
	// 	header: ({ column }) => (
	// 		<div className='flex min-w-36 items-center gap-0.5'>
	// 			Position
	// 			<button
	// 				type='button'
	// 				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
	// 			>
	// 				{getSortingIcon(column.getIsSorted())}
	// 			</button>
	// 		</div>
	// 	),
	// 	cell: ({ row }) => (
	// 		<div className='flex flex-col gap-0.5'>
	// 			<span className='text-label-sm text-text-strong-950'>{row.original.position}</span>
	// 			{/* <span className='text-paragraph-xs text-text-sub-600'>{row.original.title.date}</span> */}
	// 		</div>
	// 	),
	// },
	// {
	// 	id: 'team',
	// 	accessorKey: 'team.name',
	// 	header: ({ column }) => (
	// 		<div className='flex min-w-48 items-center gap-0.5'>
	// 			Team
	// 			<button
	// 				type='button'
	// 				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
	// 			>
	// 				{getSortingIcon(column.getIsSorted())}
	// 			</button>
	// 		</div>
	// 	),
	// 	cell: ({ row }) => (
	// 		<div className='flex items-center gap-3'>
	// 			<div className='bg-bg-white-0 shadow-regular-xs ring-stroke-soft-200 flex size-10 shrink-0 items-center justify-center rounded-full ring-1 ring-inset'>
	// 				<picture>
	// 					{row.original.team?.image.length > 1 && (
	// 						<source
	// 							srcSet={row.original.team?.image[1]}
	// 							media='(prefers-color-scheme: dark)'
	// 						/>
	// 					)}
	// 					<img
	// 						src={row.original.team?.image[0]}
	// 						alt=''
	// 						width={28}
	// 						height={28}
	// 					/>
	// 				</picture>
	// 			</div>
	// 			<div className='flex flex-col gap-0.5'>
	// 				<span className='text-label-sm text-text-strong-950'>{row.original.team?.name}</span>
	// 				{/* <span className='text-paragraph-xs text-text-sub-600'>{row.original.project.description}</span> */}
	// 			</div>
	// 		</div>
	// 	),
	// },
	// {
	// 	id: 'status',
	// 	accessorKey: 'status.label',
	// 	header: ({ column }) => (
	// 		<div className='flex items-center gap-0.5'>
	// 			Status
	// 			<button
	// 				type='button'
	// 				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
	// 			>
	// 				{getSortingIcon(column.getIsSorted())}
	// 			</button>
	// 		</div>
	// 	),
	// 	cell: ({ row }) => (
	// 		<StatusBadge.Root status={row.original.status.variant}>
	// 			<StatusBadge.Icon as={RiCheckboxCircleFill} />
	// 			{row.original.status.label}
	// 		</StatusBadge.Root>
	// 	),
	// },
	{
		id: 'actions',
		enableHiding: false,
		cell: () => (
			<Button.Root
				variant='neutral'
				mode='ghost'
				size='xsmall'
			>
				<Button.Icon as={RiMore2Line} />
			</Button.Root>
		),
	},
];

export default columns;
