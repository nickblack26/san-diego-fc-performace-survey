/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import * as React from 'react';
import * as Badge from '@/components/ui/badge';
import * as Select from '@/components/ui/select';
import { updateSurveryValueRow } from '@/lib/functions';

type Props = {
	id: number;
	objectKey: string;
	defaultValue?: number;
	helperText: Record<string, string>;
};

const SuveryDropdown = ({ defaultValue, helperText, id, objectKey }: Props) => {
	const [value, setValue] = React.useState(defaultValue);
	const color = value ? (value > 3 ? 'green' : value < 3 ? 'red' : 'yellow') : 'gray';

	// const helperText = {
	// 	'1': 'Culture Destroyer',
	// 	'2': 'Culture Disruptor',
	// 	'3': 'Culture Drag',
	// 	'4': 'Culture Stabilizer',
	// 	'5': 'Culture Enhancer',
	// 	'6': 'Culture Champion',
	// };

	const [optimisticNumber, addOptimisticNumber] = React.useOptimistic<number | undefined, number>(
		defaultValue,
		(state, newNumber) => (state = newNumber)
	);

	return (
		<Select.Root
			value={String(value)}
			defaultValue={String(optimisticNumber)}
			onValueChange={(value) => {
				setValue(Number(value));
				React.startTransition(async () => {
					addOptimisticNumber(Number(value));
					await updateSurveryValueRow?.(id, { [objectKey]: Number(value) });
				});
			}}
		>
			<Select.Trigger
				id='team'
				asChild
			>
				<span className='text-label-sm text-text-strong-950'>
					<Badge.Root
						variant='light'
						color={color}
						size='medium'
					>
						{value
							? // @ts-ignore
							  `${value} - ${helperText[String(value)]}`
							: 'Select a value'}
					</Badge.Root>
				</span>
			</Select.Trigger>

			<Select.Content>
				<Select.Item value={'1'}>1 - {helperText['1']}</Select.Item>
				<Select.Item value={'2'}>2 - {helperText['2']}</Select.Item>
				<Select.Item value={'3'}>3 - {helperText['3']}</Select.Item>
				<Select.Item value={'4'}>4 - {helperText['4']}</Select.Item>
				<Select.Item value={'5'}>5 - {helperText['5']}</Select.Item>
				<Select.Item value={'6'}>6 - {helperText['6']}</Select.Item>
			</Select.Content>
		</Select.Root>
	);
};

export default SuveryDropdown;
