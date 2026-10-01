export type SkillType = 'HAVE' | 'WANT';

export type SwapStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'COMPLETED';

export interface User {
  id: string;
  name: string;
  email: string;
  bio?: string | null;
  createdAt: Date | string;
}

export interface UserSkill {
  id: string;
  userId: string;
  skillName: string;
  skillType: SkillType;
  createdAt: Date | string;
}

export interface SwapRequest {
  id: string;
  senderId: string;
  receiverId: string;
  status: SwapStatus;
  message?: string | null;
  createdAt: Date | string;
}

export interface ChatMessage {
  id: string;
  swapRequestId: string;
  senderId: string;
  messageText: string;
  createdAt: Date | string;
}

