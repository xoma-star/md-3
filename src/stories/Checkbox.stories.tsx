import {Meta, StoryObj} from "@storybook/react";
import Checkbox from "../components/Checkbox";
import {useState} from "react";

const meta = {
    title: 'Checkbox',
    component: Checkbox,
    tags: ['autodocs']
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => {
        const [checked, setCheked] = useState(false)
        return <div className={'flex flex-col gap-8'}>
            <Checkbox checked={checked} onChange={e => setCheked(e.currentTarget.checked)}>Показывать новости</Checkbox>
            <Checkbox checked={checked} onChange={e => setCheked(e.currentTarget.checked)}/>
            <Checkbox disabled>Disabled</Checkbox>
            <Checkbox disabled defaultChecked>Disabled Checked</Checkbox>
        </div>
    }
}