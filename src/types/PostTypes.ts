
export interface PostData {
    id?: string       // optional if not created yet
    title: string
    subtitle?: string
    body: string
    isPinned?: boolean
  }
  
  export interface PostModel extends PostData {
    createdAt: Date
    updatedAt: Date
  }
  