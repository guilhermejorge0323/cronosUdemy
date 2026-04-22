import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime}min</span>,
    shortBreakTime: <span>descanse por {state.config.shortBreakTime}min</span>,
    longBreakTime: <span>descanso longo</span>,
  };

  const tipsForNoActiveTask = {
    workTime: <span>Proximo ciclo e de {state.config.workTime}min</span>,
    shortBreakTime: (
      <span>Proximo ciclo e de {state.config.shortBreakTime}min</span>
    ),
    longBreakTime: <span>Proximo e descanso longo</span>,
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
