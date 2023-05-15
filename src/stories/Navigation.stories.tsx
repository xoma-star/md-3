import {Meta, StoryObj} from "@storybook/react";
import Root from "../components/Root";
import View from "../components/View";
import {useState} from "react";
import Panel from "../components/Panel";
import Button from "../components/Button";
import Card from "../components/Card";
import Headline from "../components/Typography/Headline";

const meta = {
    title: 'Navigation',
    component: Root,
    tags: ['autodocs']
} satisfies Meta<typeof Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => {
        const [activePanel, setActivePanel] = useState('first')
        return <Root>
            <View activePanel={activePanel}>
                <Panel id={'first'}>
                    <Card className={'p-8'}>
                        <Headline>
                            Панель 1
                        </Headline>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate dolore dolorem ex magnam quam?
                        <Button onClick={() => setActivePanel('second')}>Открыть 2</Button>
                    </Card>
                </Panel>
                <Panel id={'second'}>
                    <Button onClick={() => setActivePanel('first')}>Назад</Button>
                </Panel>
            </View>
        </Root>
    }
}