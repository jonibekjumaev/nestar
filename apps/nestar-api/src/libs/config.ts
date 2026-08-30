import { Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';

export const aviableAgentSorts = ['createdAt', 'updatedAt', 'memberLikes', 'memberViews', 'memberRank'];
export const aviableMemberSorts = ['createdAt', 'updatedAt', 'memberLikes', 'memberViews'];

export const aviableOptions = ['propertyBarter', 'propertyRent'];
export const aviablePropertySorts = [
	'createdAt',
	'updatedAt',
	'propertyLikes',
	'propertyViews',
	'propertyRank',
	'propertyPrice',
];

/**  IMAGE CONFIGURATION  **/

export const validMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];
export const getSerialForImage = (filename: string) => {
	const ext = path.parse(filename).ext;
	return uuidv4() + ext;
};

export const shapeInToMongoObjectId = (target: string | Types.ObjectId): Types.ObjectId => {
	return typeof target === 'string' ? new Types.ObjectId(target) : target;
};

export const lookupMember = {
	$lookup: {
		from: 'members',
		localField: 'memberId',
		foreignField: '_id',
		as: 'memberData',
	},
};
