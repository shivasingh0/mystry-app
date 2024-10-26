import { Message } from "@/model/User";

export interface ApiResponse {
  success: boolean;
  message: string;
  data: {
    response: {
      candidates: Array<{
        content: {
          parts: Array<{
            text: string;
          }>;
        };
      }>;
    };
  };
  isAcceptingMessages?: boolean;
  messages?: Message[];
}
