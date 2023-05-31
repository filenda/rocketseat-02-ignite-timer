import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// TALK: Because this (below) is how zod exports its content, that is, without an export default,
// you have to impoprt it using * too and giving it a custom name
/**

export * from "./lib";
export as namespace Zod;

 */
import * as zod from 'zod'
import { differenceInSeconds } from 'date-fns'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { useContext, useEffect } from 'react'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { CyclesContext } from '../../contexts/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})

// TALK: This extracts the form object types and names from the zod validation schema so
// you don't have to create an interface on your own: GENIUS!
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  // TALK: 'register' is a function that returns many methods, like:
  /**
   * onChange: () => void,
   * onBlur: () => void,
   * onFocus: () => void
   */

  // const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
  //   resolver: zodResolver(newCycleFormValidationSchema),
  //   defaultValues: {
  //     task: '',
  //     minutesAmount: 0,
  //   },
  // })

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch /* reset */ } = newCycleForm

  // const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  // useEffect(() => {
  //   let interval: number

  //   if (activeCycle) {
  //     interval = setInterval(() => {
  //       const secondsDifference = differenceInSeconds(
  //         new Date(),
  //         activeCycle.startDate,
  //       )

  //       if (secondsDifference >= totalSeconds) {
  //         setCycles((state) =>
  //           state.map((cycle) => {
  //             if (cycle.id === activeCycleId) {
  //               return { ...cycle, finishedDate: new Date() }
  //             } else {
  //               return cycle
  //             }
  //           }),
  //         )

  //         setAmountOfSecondsPassed(totalSeconds)
  //         clearInterval(interval)
  //       } else {
  //         setAmountOfSecondsPassed(secondsDifference)
  //       }
  //     }, 1000)
  //   }

  //   // TALK: This return function inside the useEffect hook serves as a cleanup function, otherwise, in this case,
  //   // the interval would be always recreated adeternum
  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [activeCycle, totalSeconds, activeCycleId])

  // TALK: Using watch from react hook form for the 'task' field, makes it a react controlled input
  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(createNewCycle)} action="">
        {/* TALK: This 'FormProvider' is a context natively offered by react-hook-form lib */}
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
