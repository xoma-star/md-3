import {Meta, StoryObj} from "@storybook/react";
import Button from "../components/Button";

const meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        children: {
            control: {type: 'text'}
        },
        disabled: {
            control: {type: 'boolean'}
        },
        before: {
            control: {type: 'boolean'}
        },
        after: {
            control: {type: 'boolean'}
        }
    },
    tags: ['autodocs'],
    args: {
        children: 'Button'
    }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => <div className={'flex flex-row gap-8'}>
        <Button {...args} mode={'filled'} before={args.before ? '❤️' : undefined} after={args.after ? '❤️' : undefined}/>
        <Button {...args} mode={'tonal'} before={args.before ? '❤️' : undefined} after={args.after ? '❤️' : undefined}/>
        <Button {...args} mode={'elevated'} before={args.before ? '❤️' : undefined} after={args.after ? '❤️' : undefined}/>
        <Button {...args} mode={'outlined'} before={args.before ? '❤️' : undefined} after={args.after ? '❤️' : undefined}/>
        <Button {...args} mode={'text'} before={args.before ? '❤️' : undefined} after={args.after ? '❤️' : undefined}/>
    </div>
}