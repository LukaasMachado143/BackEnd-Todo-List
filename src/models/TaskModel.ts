interface ITaskModel {
  title: string;
  description: string;
  isConclued: boolean;
  isDeleted: boolean;
  createAt: string;
  updateAt: string;
}

export class TaskModel {
  private task: ITaskModel;
  constructor(title: string, description: string) {
    this.task = {
      title,
      description,
      isConclued: false,
      isDeleted: false,
      createAt: new Date().toISOString(),
      updateAt: new Date().toISOString(),
    };
  }
}
