import { ObjectId } from 'bson';

export const shapeInToMongoObjectId = (target: any) => {
	return typeof target === 'string' ? new ObjectId() : target;
};
