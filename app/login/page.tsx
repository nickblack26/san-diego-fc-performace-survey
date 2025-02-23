import React from 'react';

import * as FancyButton from '@/components/ui/fancy-button';
import * as LinkButton from '@/components/ui/link-button';
import Image from 'next/image';
import { Label } from '@/components/ui/dropdown';
import { Input } from '@/components/ui/input';
import { redirect } from 'next/navigation';

export function LoginPage() {
	const action = async () => {
		'use server';
		redirect('/');
	};
	return (
		<form
			action={action}
			className='grid place-items-center h-screen w-screen'
		>
			<div className='flex items-center w-full max-w-[400px] sm:mb-28 shrink-0 flex-col gap-5 bg-bg-white-0 p-7'>
				<Image
					src={
						'https://images.mlssoccer.com/image/upload/t_q-best/v1736287039/assets/sdn/logos/sd_logo_pri_fc_rgb_480x480__1__720_1_jlm4tx.png'
					}
					alt='San Diego FC Logo'
					width={100}
					height={100}
					className='object-contain'
				/>

				<div className='text-center w-full'>
					<div className='text-title-h6 text-text-strong-950'>
						Welcome back
					</div>

					<div className='text-paragraph-sm text-text-sub-600'>
						Please enter your details to login.
					</div>
				</div>

				<div className='flex flex-col w-full gap-3 flex-1'>
					<div className='flex flex-col gap-1'>
						<Label>Email Address</Label>
						<Input
							id='email'
							type='email'
							placeholder='hello@example.com'
							className='text-sm'
						/>
					</div>

					<div className='flex flex-col gap-1'>
						<Label>Password</Label>
						<Input
							id='password'
							type='password'
							placeholder='••••••••••'
							className='text-sm'
						/>
					</div>
				</div>

				<FancyButton.Root
					className='w-full'
					variant='primary'
				>
					Login
				</FancyButton.Root>

				<div className='flex justify-center gap-1 text-paragraph-sm text-text-sub-600'>
					Don’t have an account?
					<LinkButton.Root
						variant='black'
						size='medium'
					>
						Register
					</LinkButton.Root>
				</div>
			</div>
		</form>
	);
}

export default LoginPage;
