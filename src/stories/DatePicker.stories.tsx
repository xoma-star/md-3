import {Meta, StoryObj} from "@storybook/react";
import DatePicker from "../components/DatePicker";

const meta = {
    title: 'DatePicker',
    component: DatePicker,
    tags: ['autodocs']
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => <div className={'flex flex-row gap-8 flex-wrap'}>
       <DatePicker />
    </div>
}