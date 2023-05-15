import {Meta, StoryObj} from "@storybook/react";
import Chip from "../components/Chip";

const meta = {
    title: 'Chip',
    component: Chip,
    tags: ['autodocs']
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => <div className={'flex flex-row gap-8 flex-wrap'}>
        <Chip mode={'filter'}>Filter</Chip>
        <Chip mode={'filter'} selected={true}>Filter</Chip>
        <Chip mode={'assist'}>Assist</Chip>
        <Chip mode={'assist'} before={'❤️'}>Assist</Chip>
        <Chip mode={'input'}>Input</Chip>
    </div>
}