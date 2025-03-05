'use client';
import * as React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import SuveryDropdown from '@/app/survery-dropdown';
import { cultureHelperText, performanceHelperText } from '@/utils/text';
import { SurveyRow } from '@/lib/functions';
import { players } from '@/utils/read';

export type Player = {
	id: number;
	name: string;
};

const columns: ColumnDef<SurveyRow>[] = [
	{
		accessorKey: 'name',
		header: () => <div className='flex items-center gap-0.5'>Player Name</div>,
		enableSorting: false,
		cell: ({ row }) => (
			<div className='flex items-center gap-3'>
				<span className='text-label-sm text-text-strong-950'>
					{players.find((p) => p.name === row.original.player)?.name}
				</span>
			</div>
		),
	},
	{
		accessorKey: 'surveryValues.culture',
		header: () => <div className='flex items-center gap-0.5'>Culture Rating</div>,
		enableSorting: true,
		cell: ({ row }) => {
			return (
				<SuveryDropdown
					id={row.original.id}
					objectKey='culture_rating'
					defaultValue={row.original.culture_rating}
					helperText={cultureHelperText}
				/>
			);
		},
	},
	{
		accessorKey: 'surveryValues.performance',
		header: () => <div className='flex items-center gap-0.5'>Performance Rating</div>,
		enableSorting: true,
		cell: ({ row }) => {
			return (
				<SuveryDropdown
					id={row.original.id}
					objectKey='performance_rating'
					defaultValue={row.original.performance_rating}
					helperText={performanceHelperText}
				/>
			);
		},
	},
];

export default columns;
