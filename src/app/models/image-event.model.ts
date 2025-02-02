export interface ImageEvent {
    imageUrl: string;
    description: string;
    timestamp: string;
  }
  
  export interface ImageEventResponse {
    latestEvent: ImageEvent | null;
  }