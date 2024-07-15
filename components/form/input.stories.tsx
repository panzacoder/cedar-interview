import type { Meta, StoryObj } from '@storybook/react'
import { FormProvider, useForm, UseFormProps } from 'react-hook-form'
import { Input } from './input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  label: z.string().min(2, {
    message: 'Please enter a valid label.'
  })
})

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Forms/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { label: 'Label', name: 'label' },
  decorators: [
    (TargetStory) => (
      <FormProvider {...useForm({ resolver: zodResolver(formSchema) })}>
        <TargetStory />
      </FormProvider>
    )
  ]
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {}
