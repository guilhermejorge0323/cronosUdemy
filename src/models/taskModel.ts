import type { TaskStateModel } from "./TaskStateModel";

// Estado -> Componente -> Filhos

export type TaskModel = {
    id: string;
    name: string;
    duration: number;
    startDate: number;
    completeDate: number | null;
    interruptDate: number| null;
    type: keyof TaskStateModel['config'];
}