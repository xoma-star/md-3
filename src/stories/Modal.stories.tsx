import {Meta, StoryObj} from "@storybook/react";
import Root from "../components/Root";
import View from "../components/View";
import {useState} from "react";
import Panel from "../components/Panel";
import Button from "../components/Button";
import Card from "../components/Card";
import Headline from "../components/Typography/Headline";
import Modal from "../components/Modal/Modal";

const meta = {
    title: 'Modal',
    component: Root,
    tags: ['autodocs']
} satisfies Meta<typeof Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => {
        const [showModal, setShowModal] = useState(false)

        const modal = showModal ?
            <Card className={'p-8'} mode={'transparent'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias, aut consequatur ducimus harum illo ipsum minus modi necessitatibus non odit perspiciatis porro, quam reiciendis reprehenderit repudiandae totam vero. Autem culpa ducimus esse in nam, pariatur qui soluta sunt ullam vitae. Aliquam debitis laboriosam magni nam porro, provident temporibus voluptatem?
            </Card>
        : null

        return <Root modal={<Modal onClose={() => setShowModal(false)}>{modal}</Modal>}>
            <View activePanel={'first'}>
                <Panel id={'first'}>
                    <Card className={'p-8'}>
                        <Headline>
                            Панель 1
                        </Headline>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate dolore dolorem ex magnam quam?
                        <Button onClick={() => setShowModal(true)}>Открыть модальное окно</Button>
                    </Card>
                </Panel>
            </View>
        </Root>
    }
}