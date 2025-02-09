import React from 'react';
import * as Drawer from '@/components/ui/drawer';
import * as Button from '@/components/ui/button';
import { savePlayerSurvey } from './action';
import { Player } from '@/components/columns/players';
import * as Label from '@/components/ui/label';
import * as Radio from '@/components/ui/radio';
import * as Avatar from '@/components/ui/avatar';

type Props = {
	player: Player;
	children: React.ReactNode;
};

const PlayerSurveyForm = ({ player, children }: Props) => {
	const properties = [
		{
			title: 'Contribution towards team culture',
			formFieldName: 'contributionTowardsTeamCulture',
		},
		{
			title: 'On Field Performance',
			formFieldName: 'onFieldPerformance',
		},
	];

	const formValues = [1, 2, 3, 4, 5];

	return (
		<Drawer.Root>
			<Drawer.Trigger asChild>{children}</Drawer.Trigger>

			<Drawer.Content>
				<form
					action={savePlayerSurvey}
					className='flex flex-col h-full'
				>
					<Drawer.Header className='items-start'>
						<Avatar.Root size='40'>
							<Avatar.Image src={player.photoUrl} />
						</Avatar.Root>

						{/* <div className='flex flex-col gap-0.5'>
							<span className='text-label-sm text-text-strong-950'>{row.original.name}</span>
							<span className='text-paragraph-xs text-text-sub-600'>{row.original.position}</span>
						</div> */}
						<div className='flex-items-center mr-auto'>
							<Drawer.Title className='text-label-lg'>{player.name}</Drawer.Title>
							<p className='text-paragraph-sm text-text-sub-600'>{player.position}</p>
						</div>
					</Drawer.Header>

					<Drawer.Body className='text-paragraph-sm text-text-sub-600 flex flex-col h-full overflow-y-auto px-6 gap-6'>
						{properties.map((property) => (
							<section
								className='space-y-3'
								key={property.title}
							>
								<h2 className='text-label-lg font-semibold'>{property.title}</h2>

								<Radio.Group
									defaultValue='disabled-checked'
									name={property.formFieldName}
									className='space-y-5'
								>
									{formValues.map((value) => (
										<div
											className='group/radio flex items-start gap-2'
											key={value}
										>
											<Radio.Item
												value={value.toString()}
												id={`${property.formFieldName}-${value.toString()}`}
											/>
											<Label.Root
												htmlFor={`${property.formFieldName}-${value.toString()}`}
												className='text-text-sub-600 group-has-[[data-state=checked]]/radio:text-text-strong-950 flex-col gap-1'
											>
												{value}
											</Label.Root>
										</div>
									))}
								</Radio.Group>
							</section>
						))}
					</Drawer.Body>

					<Drawer.Footer className='border-t'>
						<Button.Root
							// variant='primary'
							// mode='stroke'
							size='medium'
							asChild
						>
							<button
								className='w-full'
								type='submit'
								// formAction={savePlayerSurvey}
							>
								Save
							</button>
						</Button.Root>
					</Drawer.Footer>
				</form>
			</Drawer.Content>
		</Drawer.Root>
	);
};

export default PlayerSurveyForm;
