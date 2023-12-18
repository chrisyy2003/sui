// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0
import { type DataType } from '~/pages/object-result/ObjectResultType';
import { Heading, Text } from '@mysten/ui';
import { AddressLink, ObjectLink } from '~/ui/InternalLink';
import { type ReactNode } from 'react';
import { Card } from '~/ui/Card';
import { Divider } from '~/ui/Divider';
import { usePackageViewedData } from './utils';

function PackageDetail({ label, children }: { label: string; children: ReactNode }) {
	return (
		<div className="flex flex-col gap-2">
			<Heading variant="heading4/semibold" color="steel-darker">
				{label}
			</Heading>
			{children}
		</div>
	);
}

export function PackageDetails({ data }: { data: DataType }) {
	const objectId = data.id;
	const version = data.version;
	const viewedData = usePackageViewedData({ data });
	const publisherAddress = viewedData.publisherAddress;

	return (
		<Card spacing="lg">
			<div className="flex justify-between gap-3 md:gap-5">
				<PackageDetail label="ObjectId">
					<ObjectLink objectId={objectId} />
				</PackageDetail>

				<Divider vertical />

				<PackageDetail label="Publisher">
					{publisherAddress ? <AddressLink address={publisherAddress} /> : '--'}
				</PackageDetail>

				<Divider vertical />

				<PackageDetail label="Version">
					<Text variant="pBody/medium" color="hero-dark">
						{version}
					</Text>
				</PackageDetail>
			</div>
		</Card>
	);
}