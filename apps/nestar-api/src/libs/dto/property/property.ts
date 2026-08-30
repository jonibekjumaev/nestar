import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import type { ObjectId } from '../../types/common';
import { PropertyLocation, PropertyStatus, PropertyType } from '../../enums/property.enum';
import { Member } from '../member/member';

@ObjectType()
export class Property {
	@Field(() => String)
	_id!: ObjectId;

	@Field(() => String)
	propertyType!: PropertyType;

	@Field(() => String)
	propertyStatus!: PropertyStatus;

	@Field(() => String)
	propertyLocation!: PropertyLocation;

	@Field(() => String)
	propertyAddress!: string;

	@Field(() => String)
	propertyTitle!: string;

	@Field(() => Float)
	propertyPrice!: number;

	@Field(() => Float)
	propertySquare!: number;

	@Field(() => Int)
	propertyBeds!: number;

	@Field(() => Int)
	propertyRooms!: number;

	@Field(() => Int)
	propertyViews!: number;

	@Field(() => Int)
	propertyLikes!: number;

	@Field(() => Int)
	propertyComments!: number;

	@Field(() => Int)
	propertyRank!: number;

	@Field(() => [String])
	propertyImages!: string[];

	@Field(() => String, { nullable: true })
	propertyDesc?: string;

	@Field(() => Boolean)
	propertyBarter!: boolean;

	@Field(() => Boolean)
	propertyRent!: boolean;

	@Field(() => String)
	memberId!: ObjectId;

	@Field(() => Date, { nullable: true })
	soldAt?: Date;

	@Field(() => Date, { nullable: true })
	deletedAt?: Date;

	@Field(() => Date, { nullable: true })
	constructedAt?: Date;

	@Field(() => Date)
	createdAt!: Date;

	@Field(() => Date)
	updatedAt!: Date;

	/** from aggregation */

	@Field(() => Member, { nullable: true })
	memberData?: Member;
}
