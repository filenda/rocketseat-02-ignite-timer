import { useFormContext } from 'react-hook-form'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  // TALK: There must be a <FormProvider/> wrapping this component (NewCycleForm) up
  // for this react-hook-form context hook to work
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="">Vou trabalhar em</label>
      <TaskInput
        placeholder="Dê um nome para o seu projeto"
        type="text"
        id="task"
        list="task-suggestion"
        disabled={!!activeCycle}
        {...register('task')}
      />

      {/* TALK: This is a native html5 element that can serve as a database of list of options for inputs */}
      <datalist id="task-suggestion">
        <option value="Projeto 1"></option>
        <option value="Projeto 2"></option>
        <option value="Projeto 3"></option>
        <option value="Banana"></option>
      </datalist>

      <label htmlFor="">durante</label>
      <MinutesAmountInput
        type="number"
        placeholder="00"
        id="minutesAmount"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
