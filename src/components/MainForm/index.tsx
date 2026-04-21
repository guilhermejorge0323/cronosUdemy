import { PlayCircleIcon, StopCircle, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import type React from 'react';
import { useRef, useState } from 'react';
import type { TaskModel } from '../../models/taskModel';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formartSecondsToMinutes';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  //ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  console.log(nextCycle);
  console.log(nextCycleType);

  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da terefa');
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleInterruptTask() {
    setState(prevState => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: prevState.tasks.map(task => {
          if (prevState.activeTask && prevState.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() }
          }
          return task
        })
      };
    });
  }

  return (
    <form onSubmit={handleCreateNewTask} action='' className='form'>
      <div className='formRow'>
        <DefaultInput
          id='input'
          type='text'
          labelText={'Thema'}
          placeholder='Digite algo'
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      <div className='formRow'>
        <p>O proximo intervalo e de 25 min</p>
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}

      <div className='formRow'>
        {!state.activeTask ? (
          <DefaultButton
            aria-label='Iniciar nova tarefa'
            type='submit'
            icon={<PlayCircleIcon />}
            color='green'
            key={'btn_submit'}
          />
        ) : (
          <DefaultButton
            aria-label='Parar tarefa'
            type='button'
            icon={<StopCircleIcon />}
            color='red'
            onClick={handleInterruptTask}
            key={'btn_button'}
          />
        )}
      </div>
    </form>
  );
}
