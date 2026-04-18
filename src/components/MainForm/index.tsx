import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";


export function MainForm() {
  return (
    <form action='' className='form'>
      <div className='formRow'>
        <DefaultInput
          id='input'
          type='text'
          labelText={'Thema'}
          placeholder='Digite algo'
          disabled
        />
      </div>

      <div className='formRow'>
        <p>O proximo intervalo e de 25 min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='red' />
      </div>
    </form>
  );
}
