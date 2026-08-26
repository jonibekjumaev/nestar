import { Types } from 'mongoose';

export const aviableAgentSorts = ['createdAt', 'updatedAt', 'memberLikes', 'memberViews', 'memberRank'];
export const aviableMemberSorts = ['createdAt', 'updatedAt', 'memberLikes', 'memberViews'];

export const shapeInToMongoObjectId = (target: string | Types.ObjectId): Types.ObjectId => {
	return typeof target === 'string' ? new Types.ObjectId(target) : target;
};
