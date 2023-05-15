import {Meta, StoryObj} from "@storybook/react";
import Card from "../components/Card";
import Button from "../components/Button";
import Headline from "../components/Typography/Headline";

const meta = {
    title: 'Card',
    component: Card,
    tags: ['autodocs']
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => <div className={'flex flex-row gap-8 flex-wrap'}>
        <Card className={'p-8 max-w-[320px]'} mode={'elevated'}>
            <Headline className={'mb-6'} size={'s'}>Lorem ipsum dolor sit amet.</Headline>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid, at aut, dolorem, eos error fuga in laboriosam laudantium magnam nobis optio porro provident! Accusamus ad laudantium omnis quos ratione!
            <div className={'mt-5 w-full text-right'}>
                <Button mode={'filled'}>Подробнее</Button>
            </div>
        </Card>
        <Card className={'p-8 max-w-[320px]'} mode={'filled'}>
            <Headline className={'mb-6'} size={'s'}>Lorem ipsum dolor sit amet.</Headline>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid, at aut, dolorem, eos error fuga in laboriosam laudantium magnam nobis optio porro provident! Accusamus ad laudantium omnis quos ratione!
            <div className={'mt-5 w-full text-right'}>
                <Button mode={'filled'}>Подробнее</Button>
            </div>
        </Card>
        <Card className={'p-8 max-w-[320px]'} mode={'outlined'}>
            <Headline className={'mb-6'} size={'s'}>Lorem ipsum dolor sit amet.</Headline>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid, at aut, dolorem, eos error fuga in laboriosam laudantium magnam nobis optio porro provident! Accusamus ad laudantium omnis quos ratione!
            <div className={'mt-5 w-full text-right'}>
                <Button mode={'filled'}>Подробнее</Button>
            </div>
        </Card>
    </div>
}