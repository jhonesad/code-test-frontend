export interface User {
    
    id: string | null;
    name: string;
    description: string;
    createDate: Date;
    avatar: Buffer | null;
}