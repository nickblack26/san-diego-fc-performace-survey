import * as React from 'react';
import { RiArrowDownSFill, RiArrowUpSFill, RiExpandUpDownFill } from '@remixicon/react';

export const getSortingIcon = (state: 'asc' | 'desc' | false) => {
	if (state === 'asc') return <RiArrowUpSFill className='text-text-sub-600 size-5' />;
	if (state === 'desc') return <RiArrowDownSFill className='text-text-sub-600 size-5' />;
	return <RiExpandUpDownFill className='text-text-sub-600 size-5' />;
};
