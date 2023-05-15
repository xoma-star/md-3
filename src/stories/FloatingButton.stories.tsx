import {Meta, StoryObj} from "@storybook/react";
import FloatingButton from "../components/FloatingButton";
import {Icon24LocationOutline} from "@vkontakte/icons";

const meta = {
    title: 'FloatingButton',
    component: FloatingButton,
    tags: ['autodocs']
} satisfies Meta<typeof FloatingButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => <div className={'flex flex-row gap-8 flex-wrap'}>
        <FloatingButton mode={'primary'} size={'default'}><Icon24LocationOutline/></FloatingButton>
        <FloatingButton mode={'secondary'} size={'default'}><Icon24LocationOutline/></FloatingButton>
        <FloatingButton mode={'tertiary'} size={'default'}><Icon24LocationOutline/></FloatingButton>
        <FloatingButton mode={'primary'} size={'small'}><Icon24LocationOutline/></FloatingButton>
        <FloatingButton mode={'secondary'} size={'small'}><Icon24LocationOutline/></FloatingButton>
        <FloatingButton mode={'tertiary'} size={'small'}><Icon24LocationOutline/></FloatingButton>
        <FloatingButton mode={'primary'} size={'large'}><Icon24LocationOutline width={36} height={36}/></FloatingButton>
        <FloatingButton mode={'secondary'} size={'large'}><Icon24LocationOutline width={36} height={36}/></FloatingButton>
        <FloatingButton mode={'tertiary'} size={'large'}><Icon24LocationOutline width={36} height={36}/></FloatingButton>
    </div>
}