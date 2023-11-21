import { TaskResponseDTO } from "./TaskResponseDTO";

export interface Response {
  success: boolean;
  message: string;
  data?: TaskResponseDTO | TaskResponseDTO[];
  error?: any;
}
