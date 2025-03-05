import React from 'react';

import Image from 'next/image';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import * as FancyButton from '@/components/ui/fancy-button';
import { Input } from '@/components/ui/input';

import { pool } from '@/lib/pg';
import { User } from '@/lib/functions';

async function LoginPage({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
	const params = await searchParams;

	const action = async (data: FormData) => {
		'use server';
		// Get email from form data
		const email = data.get('email') as string;

		// Look up user with email in database
		const { rows } = await pool.query<User>(`select id from public.users where email = '${email.trim()}';`);

		// If no user with email, return error
		if (!rows.length) return redirect('/login?error=Invalid Email');

		const cookieStore = await cookies();

		// Set user's id in cookie
		cookieStore.set('user', String(rows[0].id));

		// Redirect to home page
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
					<div className='text-title-h6 text-text-strong-950'>Welcome back</div>

					<div className='text-paragraph-sm text-text-sub-600'>Please enter your details to login.</div>
				</div>

				<div className='flex flex-col w-full gap-3 flex-1'>
					<div className='flex flex-col gap-1'>
						<label
							htmlFor='email'
							className='px-2 py-1 text-subheading-xs uppercase text-text-soft-400'
						>
							Email Address <span className='text-red-500'>*</span>
						</label>

						<Input
							id='email'
							name='email'
							type='email'
							required
							placeholder='hello@example.com'
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

				{params.error && (
					<div className='flex items-center gap-1.5 text-red-500 font-semibold'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
							className='lucide lucide-triangle-alert size-5'
						>
							<path d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3' />
							<path d='M12 9v4' />
							<path d='M12 17h.01' />
						</svg>

						<span className='text-paragraph-lg'>{params.error}</span>
					</div>
				)}
			</div>
		</form>
	);
}

export default LoginPage;
