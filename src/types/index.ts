export interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  created_at: string;
}

export type ToolType = 'invoice' | 'qr' | 'barcode' | 'converter';

export interface GeneratedFile {
  id: string;
  user_id: string;
  tool_type: ToolType;
  file_name: string;
  file_url: string;
  metadata: any;
  created_at: string;
}

export interface ActivityLog {
  id: string;
  user_id: string;
  action: string;
  details: string;
  created_at: string;
}
