'use client';
import React from 'react';
import * as Select from '@/components/ui/select';
import * as Avatar from '@/components/ui/avatar';
import { Team } from './columns/players';

type Props = { item: Team };

const FilterSelect = ({ item }: Props) => {
	return (
		<Select.Item
			key={item.name}
			value={item.name}
		>
			<Select.ItemIcon
				as={Avatar.Root}
				size='20'
				// color={item.color}
			>
				<Avatar.Image src={item.image[0]} />
			</Select.ItemIcon>
			{item.name}
		</Select.Item>
	);
};

export default FilterSelect;
