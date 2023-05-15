import {Meta, StoryObj} from "@storybook/react";
import IconButton from "../components/IconButton";
import {Icon24Qr} from "@vkontakte/icons";

const meta = {
    title: 'IconButton',
    component: IconButton,
    tags: ['autodocs']
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => <div className={'flex flex-row gap-8 flex-wrap'}>
        <IconButton mode={'filled'}><Icon24Qr/></IconButton>
        <IconButton mode={'tonal'}><Icon24Qr/></IconButton>
        <IconButton mode={'outlined'}><Icon24Qr/></IconButton>
        <IconButton mode={'text'}><Icon24Qr/></IconButton>
    </div>
}