import {Meta, StoryObj} from "@storybook/react";
import Input from "../components/Input";
import {Icon24CancelOutline, Icon24HideOutline, Icon24SearchOutline} from "@vkontakte/icons";

const meta = {
    title: 'Input',
    component: Input,
    tags: ['autodocs']
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => <div className={'flex flex-row gap-8 flex-wrap'}>
        <Input title={'Поиск'} placeholder={'Поиск'} before={<Icon24SearchOutline/>} after={<Icon24CancelOutline/>} />
        <Input title={'Пароль'} placeholder={'Пароль'} after={<Icon24HideOutline/>} supportingText={'Не менее 8 символов'}/>
    </div>
}