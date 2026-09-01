import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MemberService } from '../member/member.service';
import { PropertyService } from '../property/property.service';
import { BoardArticleService } from '../board-article/board-article.service';
import { Like } from '../../libs/dto/like/like';

@Injectable()
export class LikeService {
	constructor(
		@InjectModel('Like') private readonly likeModel: Model<Like>,
		private readonly memberService: MemberService,
		private readonly propertyService: PropertyService,
		private readonly boardArticleService: BoardArticleService,
	) {}
}
