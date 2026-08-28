import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, Length, Min } from 'class-validator';
import { PropertyLocation, PropertyType } from '../../enums/property.enum';
import { ObjectId } from '../../types/common';

@InputType()
export class PropertyInput {
	@IsNotEmpty()
	@Field(() => PropertyType)
	propertyType!: PropertyType;

	@IsNotEmpty()
	@Field(() => PropertyLocation)
	propertyLocation!: PropertyLocation;

	@IsNotEmpty()
	@Field(() => String)
	@Length(3, 100)
	propertyAddress!: string;

	@IsNotEmpty()
	@Field(() => String)
	@Length(3, 100)
	propertyTitle!: string;

	@IsNotEmpty()
	@Field(() => Float)
	propertyPrice!: number;

	@IsNotEmpty()
	@Field(() => Float)
	propertySquare!: number;

	@IsNotEmpty()
	@IsInt()
	@Min(1)
	@Field(() => Int)
	propertyBeds!: number;

	@IsNotEmpty()
	@IsInt()
	@Min(1)
	@Field(() => Int)
	propertyRooms!: number;

	@IsNotEmpty()
	@Field(() => [String])
	propertyImages!: string[];

	@IsOptional()
	@Length(5, 500)
	@Field(() => String, { nullable: true })
	propertyDesc?: string;

	@IsOptional()
	@Field(() => Boolean, { nullable: true })
	propertyBarter?: boolean;

	@IsOptional()
	@Field(() => Boolean, { nullable: true })
	propertyRent?: boolean;

	memberId?: ObjectId;

	@IsOptional()
	@Field(() => Date, { nullable: true })
	constructedAt?: Date;
}
