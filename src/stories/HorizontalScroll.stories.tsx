import {Meta, StoryObj} from "@storybook/react";
import HorizontalScroll from "../components/HorizontalScroll";
import {Icon24EducationOutline, Icon24LocationOutline} from "@vkontakte/icons";
import IconButton from "../components/IconButton";

const meta = {
    title: 'HorizontalScroll',
    component: HorizontalScroll,
    tags: ['autodocs']
} satisfies Meta<typeof HorizontalScroll>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => <div className={'flex flex-row gap-8 flex-wrap'}>
        <HorizontalScroll header={'Example Scroll'} icon={<Icon24EducationOutline/>} className={'w-64'}>
            <IconButton mode={'tonal'}><Icon24LocationOutline/></IconButton>
            <IconButton mode={'tonal'}><Icon24LocationOutline/></IconButton>
            <IconButton mode={'tonal'}><Icon24LocationOutline/></IconButton>
            <IconButton mode={'tonal'}><Icon24LocationOutline/></IconButton>
            <IconButton mode={'tonal'}><Icon24LocationOutline/></IconButton>
            <IconButton mode={'tonal'}><Icon24LocationOutline/></IconButton>
            <IconButton mode={'tonal'}><Icon24LocationOutline/></IconButton>
            <IconButton mode={'tonal'}><Icon24LocationOutline/></IconButton>
            <IconButton mode={'tonal'}><Icon24LocationOutline/></IconButton>
            <IconButton mode={'tonal'}><Icon24LocationOutline/></IconButton>
            <IconButton mode={'tonal'}><Icon24LocationOutline/></IconButton>
            <IconButton mode={'tonal'}><Icon24LocationOutline/></IconButton>
            <IconButton mode={'tonal'}><Icon24LocationOutline/></IconButton>
            <IconButton mode={'tonal'}><Icon24LocationOutline/></IconButton>
            <IconButton mode={'tonal'}><Icon24LocationOutline/></IconButton>
            <IconButton mode={'tonal'}><Icon24LocationOutline/></IconButton>
        </HorizontalScroll>
    </div>
}