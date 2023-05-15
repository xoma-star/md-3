import {Meta, StoryObj} from "@storybook/react";
import Select from "../components/Select";

const meta = {
    title: 'Select',
    component: Select,
    tags: ['autodocs']
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const options = [
    {label: 'Finland', value: 'FI'},
    {label: 'Russia', value: 'RU'},
    {label: 'England', value: 'EN'}
]
const options2 = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'fe'},
    {label: 'Helicopter', value: 'he'}
]

export const Default: Story = {
    render: (args) => {
        return <div className={'flex flex-col gap-8 h-96 w-64'}>
            <Select onValueChange={e => console.log(e)} placeholder={'Country'} options={options}/>
            <Select onValueChange={e => console.log(e)} placeholder={'Gender'} options={options2}/>
        </div>
    }
}