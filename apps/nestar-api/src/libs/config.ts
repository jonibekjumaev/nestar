import { Types } from 'mongoose';

export const shapeInToMongoObjectId = (target: string | Types.ObjectId): Types.ObjectId => {
	return typeof target === 'string' ? new Types.ObjectId(target) : target;
};
